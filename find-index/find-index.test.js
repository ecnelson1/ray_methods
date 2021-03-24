const findIndex = require('./find-index.js')

describe('FindIndex function', ()=> {
    it('Takes an Array and callback of signature item => {} and returns the index of the first item whose callback returns true or a truthy value.', () => {
        const arr = [1, 3, 5, 6, 7, 9, 8, 10]
        const firstEven = findIndex(arr, (x) => x % 2 === 0)
        expect(firstEven).toEqual(3)
        expect(findIndex(arr, (x) => x === 'potato')).toEqual(-1)
    })
})
