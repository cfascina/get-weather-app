// var arrNames = ['João', 'Maria', 'José'];

// arrNames.forEach(function(name) {
//   console.log('forEach: ' + name);
// })

// arrNames.forEach((name) => {
//   console.log('Arrow function: ' + name);
// });

// arrNames.forEach((name) => console.log('Arrow function simplified: ' + name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Caio'));

// var person = {
//   name: 'Caio',
//   greet: function() {
//     arrNames.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

// person.greet();

function add(a, b) {
  return a + b;
}
console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
  return a + b;
}
console.log('addStatement: ' + addStatement(1, 3));
console.log('addStatement: ' + addStatement(9, 0));

var addExpression = (a, b) => a + b;
console.log('addExpression: ' + addExpression(1, 3));
console.log('addExpression: ' + addExpression(9, 0));
