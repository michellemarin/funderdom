var templateString = document
                      .getElementById('nameTemplate')
                      .innerHTML;
var nameTemplate = _.template(templateString);

var compiledTemplate = nameTemplate( { // Don't use an extra space between the ( and the {
  name: 'bill'
});

var templateString = document.getElementById('nameTemplate').innerHTML;

var nameTemplate = _.template(templateString);

console.log(nameTemplate);
console.log(templateString);
console.log(compiledTemplate);

var templateString = document.getElementById('nameTemplate').innerHTML;

var nameTemplate = _.template(templateString);


// My variable of names.
var names = [
  'bill',
  'jane',
  'sally',
  'mary'
];

//Getting a list of compiled templates by mapping over my list of names.
var nameTemplates = _.map(names, function (personName) {
  return nameTemplate({ name: personName });// Notice that an object is being passed into this function
                                            // this object has the key that matches my template in HTML.
        //I'm calling the nameTemplate function once for each name and returning it.
});

var destination = document.querySelector('#nameTarget');
//Grab the element where I want to put the data

destination.innerHTML = nameTemplates.join('');
//Assign the innerHTML of my destination element to all the name templates joined together.

/* Part 1 - Question #1 */

function myFunction() {
var header = document.getElementsByTagName("header")[0]; // Both of these lines should be indented.
header.innerHTML = 'I just changed the DOM magic sauce'; // Both of these lines should be indented.
}

function changeColor() {
  document.getElementsByTagName("header")[0].style.color="#FF0000";
}

myFunction('changeColor'); //The name myFunction is really undescriptive and hurts comprehension.
//I dont know what this code does or why. It looks like a bug, but its not. More descriptive names like changeColor
//should be used


/* Part 1 - Question #2 */

var secondOne = document.getElementsByTagName('li')[1];

console.log(secondOne.innerHTML);

/* Part 1 - Question #3 */
  var newNode = document.createElement('li');
  document.getElementById('main').appendChild(newNode);

/* Part 2 - Question #1 */
var colorString = document.getElementById('colorTemplate').innerHTML;

var colorTemplate = _.template(colorString);

var colors = [
  'magenta',
  'cyan',
  'black',
  'yellow'
];

var colorTemplates = _.map(colors, function(thisColor) {
  return colorTemplate({color: thisColor});
});

var colorDestination = document.querySelector('#colorTarget');

colorDestination.innerHTML = colorTemplates.join('');

console.log(colorTemplate);
console.log(colorString);

/* Part 1 - Question #1 console.log that bitch */ // Such language, lol
changeColor();
