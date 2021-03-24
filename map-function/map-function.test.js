const mapFunction = require('./map-function')

describe('map function', () =>{
    it('Takes an Array and callback of signature item => {} and creates a new Array with the return value of each called callback.', () =>{
        const originalArr = [1, 2, 3, 4, 5, 6]
        const newArr = mapFunction(originalArr, (x) => x * 2 )
        expect(newArr).toEqual([2, 4, 6, 8, 10, 12])

    });
});


