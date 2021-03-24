const findIndex= (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        const newObject = callback(arr[i]);
        if(newObject === true){
            return i;};
    };
    return -1  
};
module.exports = findIndex
