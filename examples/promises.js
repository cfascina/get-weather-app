// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found.');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if(err) {
//     console.log('err', err);
//   }
//   else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(81);
//       reject('City not found.');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadepia').then(function(temp) {
//   console.log('Promisse success', temp);
// }, function(err) {
//   console.log('Promisse error', err);
// });

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof(a) === 'number' && typeof(b) === 'number')
      resolve(a + b);
    else
      reject('A and B must be numbers.');
  });
}

addPromise(8, 4).then(
  function(sum) {
    console.log('Success: ', sum);
  },
  function(err) {
    console.log('Error: ', err);
  }
);
