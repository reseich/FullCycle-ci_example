const sumFile = require('./sum')

test('test sum two values', () => {
    expect(sumFile.sum(1, 2)).toBe(3)
})
test('test plus1 ', () => {
    expect(sumFile.plus1(5)).toBe(6)
})