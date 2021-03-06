const test = new Object({})

test.sum = function (a, b) {
    return a + b
}

test.plus1 = (a) => {
    return a + 1
}

module.exports = test