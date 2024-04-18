//Topics:
let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

//Describe o context  // Se pueden llamar it o specify
describe('Unit testing for our dummy aplication', () => {
    context('Math with POSITIVE numbers', () => {
        it('should add positive numbers', () => {
            expect(add(2, 2)).to.eq(4)
        })
        it('should substract positive numbers', () => {
            expect(substract(4, 2)).to.eq(2)
        })
        it('should divide positive numbers', () => {
            expect(divide(4, 2)).to.eq(2)
        })
        it('should multiply positive numbers', () => {
            expect(multiply(4, 2)).to.eq(8)
        })
    })
    describe('Math with DECIMAL numbers', () => {
        it('should add decimal numbers', () => {
            expect(add(2.2, 2.2)).to.eq(4.4)
        })
        it('should substract positive number', () => {
            expect(substract(4.4, 2.2)).to.eq(2.2)
        })
    })
})