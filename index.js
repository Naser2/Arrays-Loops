let number = 10

for (var i = 1; i < number; i++) {
  console.log("Hello world" + i + "times")
}

// undefined
// => undefined
//    console.log(i)
// 1
// => undefined
//    i ++
// => 1
//    i ++
// => 2
//    i ++
// => 3
//    i ++
// => 4
//    i ++
// => 5



var text = ""
for (i = 0; i < 5; i++) {
    text += "The number is " + i ;
}

var cars = ["Ford", "NIssan", "Honda", "Mitsubitchi"]
for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
}

var i = 0;
var len = cars.length;
for (; i < len; ) {
    text += cars[i] + "<br>";
    i++;
}

// The For/In Loop
// The JavaScript for/in statement loops through the properties of an object:
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
    text += person[x];
}


// Different Loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

var text = ""
for (i = 0; i < 5; i++) {
    text += "The number is " + i + ". " ;
}

var numbers = 100

for (var i = 1; i < numbers.length; i ++) {
  "Hello world " + i + " times"
}

/// -----------------------------------------------////

//RANDOMIZED HillBilly small Steps
var compass = ["East", "West", "North", "South" ]

var randomSteps = compass[Math.floor(Math.random() * compass.length)];
// var step;
for (var step = 1; step <= 5; step++ *`${randomSteps}`) {
  // Runs 5 times, with values of step 0 through 4.
  console.log(`Walking ${step} step ${randomSteps} `);
}



/// Randomized Months
var myArray = ['January', 'February', 'March', "April", "May"];
var rand = myArray[Math.floor(Math.random() * myArray.length)];
console.log(rand)



// Adding a prototype function to the Array class:

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
// Now I can get a random array element by just typing:

var myRandomElement = myArray.randomElement()

// Note that this will add a property to all arrays, so if you're looping over one using for..in you should use .hasOwnProperty():

for (var prop in myArray) {
    if (myArray.hasOwnProperty(prop)) {
        // ... Do Something Damn It!
    }
}

//   ******************     ///
//Finish This so it does not run inifinitely
// var theMark = true;
// function  doSomething(a, b) {
//   a + b
// }
// markLoop:
// while (theMark == true) {
//    doSomething( 1 + 2);
// }


for (var prop in myArray) {
    if (myArray.hasOwnProperty(prop)) {
        // ... Do Something Damn it!
    }
}


//Finish This so it does not run inifinitely
// var theMark = true;
// function  doSomething(a, b) {
//   a + b
// }
// markLoop:
// while (theMark == true) {
//    doSomething( 1 + 2);
// }


// for (var i = 1; i < 100; i++) {
//   console.log("Hello World the " + i + " time");
// }
let array = ["Hello", 1, 2, "Boss", 3  ]

function forLoop(array) {
	for ( i = 0; i < array.length ; i++) {
		if (i === isNaN) {
			array.push(`I am ${i}  loop.`);
		} else {
			array.push(`I am ${i} strange loops.`);
		}
	}

	return array;
}
// forLoop(array)  /// this runs infinitely


function makeArray() {
  const array = []
  const t = 10

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}



// INTRO To Javascript Looping
var numbers = 10

for (var i = 1; i < numbers.size; i ++) {
  console.log("Hello world:" + i + "time");
}

// or
for (var i = 1; i < 20; i++){
  console.log("Hello world:" + i + "time")
}
//
for (i = 0 ; i < gifts.length; i ++) {
  console.log(gifts[i])
}

//
for (let i = 0; i < 25;  i++) {
  if(i) {
     `I am ${i} strange loop.`
  }
  else if ( i === isNaN) {
    `I am ${i} strange loops.`
  }
}

// LAB
function forLoop(array) {
	for ( i = 0; i < 25; i++) {
		if (i === 1) {
			array.push(`I am ${i} strange loop.`);
		} else {
			array.push(`I am ${i} strange loops.`);
		}
	}

	return array;
}


//    ********* Todo: Create a function called whileLoop  **********
var fixum = 10

function whileLoop(fixum) {
	while ( 0 < fixum) {
		console.log(--fixum);
	}
	return 'done';
}

// Todo: Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the incrementVariable() function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until incrementVariable() returns false. (Your condition might look something like array.length > 0 && incrementVariable().) Finally, return the array.

function doWhileLoop(array) {
var i = 0;

	function incrementVariable() {
	 i = i + 1;
	}
//
	do {
		console.log('array.length = ' + array.length + ' and i = ' + i);
		array = array.slice(1);
		incrementVariable(); //Ask about get this calling !!
	}

	while (array.length > 0 && i < 5);

	return array;
}





// ********** MORE LOOPS *************

var musicians = ["Jhon", "Peter"]
var instruments = ["Guitar", "Djembe"]


// Musicians & Instruments
function theBeatlesPlay(musicians, instruments) {
  var store1 = []

  for (let i = 0; i < musicians.length && instruments.length; i++ ) {
    store1.push(`${musicians[i]} plays ${instruments[i]}`)

     }
     return store1
  }


theBeatlesPlay(musicians, instruments)


// FACTS
function johnLennonFacts(facts) {
const withBang = []

  var i = 0

  while ( i < facts.length) {
    withBang.push(facts[i] += '!!!')
    i +=1
  }

  return withBang
};

// NUMBER times "I love the Bea...."
function iLoveTheBeatles(n) {
  var store2 = []

    do {  store2.push("I love the Beatles!")
        n += 1
       }

    while ( n < 15) {

     }

    return store2
}


// ********* FOR EACH ************ //

var fruits = [{
    name: "banana",
    weight: 150
}, {
    name: "apple",
    weight: 130
}, {
    name: "orange",
    weight: 160
}, {
    name: "kiwi",
    weight: 80
}]

fruits.forEach(function(item, index) {
    console.log("Current: " + item.name);
    if (index > 0) {
        console.log("Previous: " + fruits[index - 1].name);
    }
    if (index < fruits.length - 1) {
        console.log("Next: " + fruits[index + 1].name);
    }
});

var name = ["james", "Ben"]
// var katzDeliLine = [];

// function takeANumber(katzDeliLine, name) {

//    katzDeliLine.forEach(function(index, name) {
//      katzDeliLine.push(`${index}. ${name}`)
//     console.log(katzDeliLine);
//    })
//   return `Welcome, ${name}. You are number ${1} in line.`
// }
// takeANumber(katzDeliLine, name)



// var people = ["james", "Ben", "Sekou"]
// var katzDeliLine = [];

// function takeANumber(katzDeliLine, people) {

//    people.forEach(function(index, name) {
//      katzDeliLine.push(`${index}. ${name}`)
//     console.log(` 'Current: '  + ${name}`);
//    })
//   return `Welcome, ${name}. You are number ${index} in line.`
// }
// takeANumber(katzDeliLine, people)

// var name = ["james", "Ben", "Sekou"]

************ KATZDELI MY WAY Using ForEacH *****************

var waitingInLine = ["james", "Ben", "Sekou"];

function currentLine(waitingInLine) {
  if (!waitingInLine.length) {
    return "The line is currently empty."
  }
  var indexLine = []
  var index = 0
  waitingInLine.forEach(function(name, index) {
      index += 1
    indexLine.push(`${index}. ${name}`)

    console.log(indexLine)
  })

  return  `The line is currently: ${indexLine.join(', ')}`
}

// TAKE A NUMBER
function takeANumber(waitingInLine, name) {

  waitingInLine.push(name)
   return `Welcome, ${name}. You are number ${waitingInLine.length } in line.`
}

//NOW SERVING
function nowServing(waitingInLine) {

  if(!waitingInLine.length) {
    return "There is nobody waiting to be served!"
      console.log(`The line is currently: ${waitingInLine.shift()}`)

  } else {
  return`Currently serving ${waitingInLine.shift()}.`
  }
}


  takeANumber(waitingInLine, name)
  nowServing(waitingInLine)
  currentLine(waitingInLine)


  /// ******** KATZDELI SOLUTION ************ ///

  function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};
