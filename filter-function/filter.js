const filterFunction = (arr, callback) => {
    let newArr=[];
    for( const object of arr){
        const newObject = callback(object);
        if(newObject === true){
        newArr= [...newArr, object]};
    }
    return newArr
};
module.exports = filterFunction
