const sum = require('./sum')

test('test sum two values', () => {
    expect(sum(1, 2)).toBe(3)
})