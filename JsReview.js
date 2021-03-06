// write a function that takes in three parameters and returns the sum of those three parameters

function countFruit (apple, pear, peach) {
	return (apple+pear+peach)
}

countFruit(2,2,2) // 6

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

var word = "Meow"

function gimmelastLetter (enterword) {
	return enterword.slice(-1)
}

gimmelastLetter (word) // w

// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

var Number1 = 3

function returnCube (number){
	return Math.pow(number,number)
}

returnCube(Number1) // 27

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

var aString = "HelloMyNameIsString"

function reverseString (s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

reverseString(aString)


// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }

var Character=["Naruto", "Sasuke", "Sakura"]
var Attack=["Kagebunshin", "Sharingan", "Big Slap"]

function CharacterAtack ( char, att) {
	var a = {}
	for (var i=0; i < char.length; i++) {
		a[char[i]] = att[i]
	}
	return a
} 

CharacterAtack(Character,Attack)

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }


var Object1 = {
	Naruto: "Kagebunshin",
	Sasuke: "Sharingan",
	Sakura: "Big Slap"
}

function makenewObject (anObject) {
	var anotherObject = {"Keys": [], "Values": []};
	for (var a in anObject) {
	anotherObject.Keys.push(a);
	anotherObject.Values.push(anObject[a])
	}
	return anotherObject
}

console.log(makenewObject(Object1))