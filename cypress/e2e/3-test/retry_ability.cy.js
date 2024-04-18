const { beforeEach } = require("mocha")

describe('Sesion of retry_ability',function(){
    beforeEach(function(){
        cy.visit('http://localhost:8888/#/') // comando para visitar la pagina
        cy.get('.new-todo') //comando -> obetener uno o mas elementos del DOM
        .type('prueba1{enter}')
        .type('prueba2{enter}')
    })
    
    it('You must create 2 items',()=>{
        cy.get('.todo-list li') //command
        .should('have.length',2) //assertion
    })
    
    it('must have the specified text',()=>{
        cy.get('.todo-list li',{timeout:5000}) //command
        .should('have.length',2) //assertion
        .and($li => {
            expect($li.get(0).textContent,"primer-item").to.equal('prueba1')
            expect($li.get(1).textContent,"segundo-item").to.equal('prueba2')
        })
    })

})