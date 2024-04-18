//hoks ->Mocha

/* --
before() -> Una vez al principio
beforeEach() -> Antes de cada test
TEST EXECUTION
afterEach() -> Despues de cada test
beforeEach()
TEST EXECUTION
afterEach()
After() -> UNA VEZ al final
*/

describe('Demo hooks', function(){
    before(function(){
        cy.log('Before')
    })
    this.beforeEach(function(){
        cy.log('Before each')
    })

    it('should be test#1',function(){
        console.log('test #1')
    })

    it('should be test#2',function(){
        console.log('test #2')
    })

    it('should be test#2',function(){
        console.log('test #3')
    })
    afterEach(function(){
        cy.log('afterEach')
    })
    after(function(){
        cy.log('after')
    })
})