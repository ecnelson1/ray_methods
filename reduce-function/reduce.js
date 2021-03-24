const reduceArr= (arr, callback, initializer) => {
 let acc;
 let i;
 if(initializer){
     acc = initializer;
     i = 0;
 } else {
     acc = arr[0];
     i = 1;
 }
 for( i; i < arr.length; i++){
     acc = callback(acc, arr[i])
 }
 return acc
};
module.exports = reduceArr
