#!/usr/bin/env perl
use 5.10.0;
use strict;
use warnings;

use SelectSaver;
use Fatal              qw(open close);
use File::Find         qw(find);
use String::ShellQuote qw(shell_quote);
use File::Which        qw(which);
use File::Basename     qw(basename);

main(@ARGV);

sub main {
    my($root, $target)  = @_;
    ($root && $target) or die "Usage: $0 root-dir target-file\n";

    my $build = do {
        local $ENV{PATH} = "$root/node_modules/browserbuild/bin"
                           . ":" . $ENV{PATH};
        which('browserbuild');
    } or die "Cannot find browserbuild."
           . " Please install it with `npm install`\n";

    buildBuiltinJS($root, "lib/_builtins.js");
    buildCompilerJS($root, $build, $target);
}

sub buildBuiltinJS {
    my($root, $target) = @_;

    open my($fh), ">", $target;
    my $guard = SelectSaver->new($fh);

    print <<'HEADER';
// THIS FILE IS AUTOMATICALLY GENERATED.
// DO NOT EDIT IT!
"use strict";

var BuiltinClassContent = module.exports = {
HEADER

    my @files;
    find {
        no_chdir => 1,
        wanted   => sub {
            push @files, $_ if $_ =~ /\.jsx$/;
        },
    }, "$root/lib";

    foreach my $file(@files) {
        open my $jsx, "<", $file;

        my $basename = basename($file);

        # FIXME
        print qq{\t"lib/built-in/$basename":\n};

        my @lines = <$jsx>;
        for(my $i = 0; $i < @lines; ++$i) {
            my $line = $lines[$i];
            $line =~ s/["']/\\$1/g;
            $line =~ s/\r/\\r/g;
            $line =~ s/\n/\\n/g;

            print qq{\t\t"$line"};
            if($i != $#lines) {
                print qq{+};
            }
            elsif($file ne $files[-1]) {
                print qq{,};
            }
            print qq{\n};
        }
    }

    print <<'FOOTER';
}; // end of BuiltinClassContent
FOOTER

    close $fh;
}

sub buildCompilerJS {
    my($root, $build, $target) = @_;
    say "build $target";
    my @files;
    find {
        no_chdir => 1,
        wanted   => sub {
            push @files, $_ if $_ =~ /\.js$/;
        },
    }, "$root/lib";
    my $cmd = "$build --main compiler --global jsx --basepath '$root/lib/' "
        . join(' ', map { shell_quote($_) } @files)
        . " > "
        . shell_quote($target);

    system($cmd) == 0 or die "Failed to build: $cmd\n";
}

