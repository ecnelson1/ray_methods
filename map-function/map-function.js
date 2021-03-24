const mapFunction = (arr, callback) => {
    let newArr=[];
    for( const object of arr){
        const newObject = callback(object);
        newArr= [...newArr, newObject];
    }
    return newArr
};
module.exports = mapFunction
