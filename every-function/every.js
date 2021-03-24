const everyFunc = (arr, callback) =>{
    let boolean = true;
    for(let object of arr){
        if(!callback(object)) boolean = false;
    }
    return boolean
}
module.exports = everyFunc
