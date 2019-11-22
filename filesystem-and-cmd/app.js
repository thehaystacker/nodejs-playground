// // ORIGINAL OBJECT
// var accessor = {
//   sortable: {
//     get: function() {
//       return typeof this.getAttribute("name") != undefined;
//     }
//   },
//   draggable: {
//     get: function() {
//       return typeof this.getAttribute("id") != undefined;
//     }
//   }
// };

// // CAN BE CONVERTED INTO
// var getAttributeCB = function(attr) {
//   return function() {
//     return typeof this.getAttribute(attr) != undefined;
//   };
// };

// var accessor = {
//   sortable: {
//     get: getAttributeCB("name");
//   },
//   draggable: {
//     get: getAttributeCB("id")
//   }
// };

// SECOND EXAMPLE
// var firstColor = 'green';

// var printColor = function () {
//   return function (secondColor) {
//     return 'The colors are: ' + firstColor + ' & ' + secondColor;
//   }
// }

// console.log(printColor()('red'));

// // CREATING CLASSES IN JAVASCRIPT
// function account(amount) {
//   var cash = amount;

//   function getCash() {
//     console.log(this);
    
//     return cash;
//   };

//   setCash = function(amount) {
//     cash = amount;
//   };

//   return { getCash, setCash };
// }


// // The point is there is no need to instantiate this type of function declaration as new class
// // Instead you could call them as regular function call and it will work
// account(50);
// console.log(account(50).getCash());

const tasks = {
  tasks: [{
    text: 'some 1',
    completed: true
  },{
    text: 'some 2',
    completed: false
  },{
    text: 'some 3',
    completed: false
  }],

  getTasksTodo: function () {
    return  this.tasks.filter(task => {
      return task.completed === false;
    });
  }
}

console.log(tasks.getTasksTodo());