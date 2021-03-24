const everyFunc = require('./every.js')

describe('everyFunc function', ()=> {
    it('Takes an Array and callback of signature item => {} and returns an overall true value if all callback return true or a truthy value.', () => {
   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   expect(everyFunc(arr,(x)=> x<11)).toEqual(true)
   expect(everyFunc(arr, (x)=>x>10)).toEqual(false)
    })
})
