native class Object {

	function toString() : string;

}

// 15.2
native final class Hash.<T> {

	// 15.2.4
	function hasOwnProperty(key : string) : boolean;

}

// 15.4
native final class Array.<T> {

	// 15.4.4
	override function toString() : string;
	function toLocaleString() : string;
	function concat(a : Array.<T>) : Array.<T>; // FIXME more arguments
	function join() : string;
	function join(separator : string) : string;
	function pop() : MayBeUndefined.<T>;
	function push(item : T) : int; // FIXME more arguments
	function reverse() : Array.<T>;
	function shift() : MayBeUndefined.<T>;
	function slice(start : int) : Array.<T>;
	function slice(start : int, end : int) : Array.<T>;
	function sort() : Array.<T>;
	function sort(comparefn : function (x : MayBeUndefined.<T>, y : MayBeUndefined.<T>) : int) : Array.<T>;
	function splice(start : int, deleteCount : int) : Array.<T>; // FIXME more arguments
	function unshift(item : T) : int; // FIXME more arguments

}

// 15.5
native final class String {

	// 15.5.2
	function constructor();
	function constructor(s : string);
	function constructor(s : String);

	// 15.5.3
	static function fromCharCode(char0 : int) : string; // FIXME support vararg

	// 15.5.4
	override function toString() : string;
	function valueOf() : string;
	function charAt(pos : int) : string;
	function charCodeAt(pos : int) : int;
	function concat(string1 : String) : string; // FIXME support vararg
	function indexOf(searchString : string) : int;
	function indexOf(searchString : string, position : int) : int;
	function lastIndexOf(searchString : string) : int;
	function lastIndexOf(searchString : string, position : int) : int;
	// FIXME localeCompare?
	// FIXME function match(regexp : RegExp) : string [];
	function replace(searchValue : string, replaceValue : string) : string;
	// FIXME function replace(searchValue : string, replaceValue : function) : string;
	function replace(searchValue : RegExp, replaceValue : string) : string;
	// FIXME function replace(searchValue : RegExp, replaceValue : function) : string;
	function search(searchValue : string) : int;
	// FIXME function search(searchValue : RegExp) : int;
	function slice(start : int, end : int) : string;
	function split(separator : string) : string [];
	function split(separator : string, limit : int) : string [];
	// FIXME function split(separator : RegExp) : string [];
	// FIXME function split(separator : RegExp, limit : int) : string [];
	function substring(start : int, end : int) : string;
	function toLowerCase() : string;
	function toLocaleLowerCase() : string;
	function toUpperCase() : string;
	function toLocaleUpperCase() : string;

	// 15.5.5
	var length : int;
}

// 15.6
native final class Boolean {

	// 15.6.2
	function constructor();
	function constructor(value : boolean);

	// 15.6.4
	override function toString() : string;
	function valueOf() : boolean;
}


// 15.7
native final class Number {

	// 15.7.2
	function constructor();
	function constructor(value : number);

	// 15.7.3
	static var MAX_VALUE : number;
	static var MIN_VALUE : number;

	// NOTE: NaN, POSITIVE_INFINITY and NEGATIVE_INFINITY are
	//       not provided. Use NaN, +Infinity, and -Infinity literals
	//       instead.

	// 15.7.4
	override function toString() : string;
	function toString(radix : int) : string;
	function toLocaleString() : string;
	function valueOf() : number;
	function toFixed(fractionDigits : int) : string;
	function toExpotential(fractionDigits : int) : string;
	function toPrecision(precision : int) : string;

	// 15.1.2 (Function Properties of the Global Object)
	static function parseInt(str :string) :number;
	static function parseInt(str :string, radix :int) :number;
	static function parseFloat(str :string) :number;
	static function isNaN(num :number) :boolean;
	static function isFinite(num :number) :boolean;

}

// 15.9
native final class Date {
	// NOTE: these "number"s may be NaN, so it canot be integers.

	// TODO: complete all the methods

	// 15.9.3
	function constructor(year :number, month :number);
	function constructor(year :number, month :number, date :number);
	function constructor(year :number, month :number, date :number,
						hours :number);
	function constructor(year :number, month :number, date :number,
						hours :number, minutes :number);
	function constructor(year :number, month :number, date :number,
						hours :number, minutes :number, seconds :number);
	function constructor(year :number, month :number, date :number,
						hours :number, minutes :number, seconds :number,
						ms :number);

	function constructor(value :string);
	function constructor(value :number);
	// not defined in ECMA-262, but JS's new Date(new Date) works
	function constructor(value :Date);

	function constructor();

	// 15.9.4
	static function parse(value :string) :number;

	static function UTC(year :number, month :number) :Date;
	static function UTC(year :number, month :number, date :number) :Date;
	static function UTC(year :number, month :number, date :number,
						hours :number) :Date;
	static function UTC(year :number, month :number, date :number,
						hours :number,  minutes :number) :Date;
	static function UTC(year :number, month :number, date :number,
						hours :number,  minutes :number, seconds: number)
						:Date;
	static function UTC(year :number, month :number, date :number,
						hours :number,  minutes :number, seconds: number,
						ms :number) :Date;


	static function now() :number;

	// 15.9.5
	// NOTE: to*String is implementation-dependent
	override function toString() :string;
	function toDateString() :string;
	function toTimeString() :string;
	function toLocaleString() :string;
	function toLocaleDateString() :string;
	function toLocaleTimeString() :string;

	function valueOf() :number;

	function getTime() :number;
	function getFullYear() :number;
	function getUTCFullYear() :number;
	function getMonth() :number;
	function getUTCMonth() :number;
	function getDate() :number;
	function getUTCDate() :number;
	function getHours() :number;
	function getUTCHours() :number;
	function getMinutes() :number;
	function getUTCMinutes() :number;
	function getSeconds() :number;
	function getUTCSeconds() :number;
	function getMilliseconds() :number;
	function getUTCMilliseconds() :number;
	function getTimezoneOffset() :number;

	// 15.9.3.28-
	function setTime(time :number) :number;
	function setMilliseconds(ms :number) :number;
	function setUTCMilliseconds(ms :number) :number;
	function setSeconds(sec :number) :number;
	function setUTCSeconds(sec :number) :number;
	function setMinutes(min :number) :number;
	function setUTCMinutes(min :number) :number;
	function setHours(hour :number) :number;
	function setUTCHours(hour :number) :number;
	function setDate(date :number) :number;
	function setUTCDate(date :number) :number;
	function setMonth(month :number) :number;
	function setUTCMonth(month :number) :number;
	function setFullYear(year :number) :number;
	function setUTCFullYear(year :number) :number;

	// 15.9.5.42- added in ECMA-262 5th
	function toUTCString() :string;
	function toISOString() :string;
	function toJSON() :string;
	function toJSON(key :string) :string; // key is given but ignored
}

// 15.10 RegExp
native final class RegExp {

	function constructor(pattern :string, flags :string);
	function constructor(pattern :string);

	// FIXME: the matched object is a variation of string[],
	//        but has "index", "input" and "lastIndex" properties
	function exec(str :string) :string[];

	function test(str :string) :boolean;

	override function toString() :string;

	const var source :string;
	const var global :boolean;
	const var ignoreCase :boolean;
	const var multiline :boolean;
	const var lastIndex :int;

}

// vim: set noexpandtab: