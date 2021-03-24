const reduceArr = require('./reduce.js')

describe('reduceArr function', ()=> {
    it('Takes an Array and callback of signature (accumulator, item) => {} and an (optional) second initialValue parameter that is the initial value of the accumulator. After each function call, the return value is passed as the accumulator argument of the next function call.', () => {
   const arr = [1, 2, 3, 4, 5 ]
   reducedArr = reduceArr(arr, (acc, item) => acc + item, 0)
   expect(reducedArr).toEqual(15)
   expect(reduceArr(arr, (acc, item) => acc + item, 100)).toEqual(115)
   expect(reduceArr(arr, (acc, item) => acc-item, 0)).toEqual(-13)
   expect(reduceArr(arr, (acc, item) => acc - item, 100)).toEqual(85)
    })
})
