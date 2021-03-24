const filter = require('./filter.js')

describe('Filter Function', () => {
it('It Takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value.', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const filteredArr = filter(arr, (x) => x<5)
    expect(filteredArr).toEqual([1, 2, 3, 4]) 
})
})
