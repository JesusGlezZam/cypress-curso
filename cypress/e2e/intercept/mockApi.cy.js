describe('Commands example', function(){
    
    it('Login succesfull',function(){
        cy.visit('http://localhost:8888/#/');
        
        cy.get('.new-todo').type('test{enter}');
        cy.get('.new-todo').type('wash{enter}');
        cy.get('.todo-list li')
        .should('have.length',2)
        .and('contain','test')
        .and('contain','wash')
    })
  //fallido
    it('Mocked API response',()=>{
        cy.visit('http://localhost:8888/#/');
      //  cy.intercept('GET','/todos',{
       //     fixture:'intercept/interceptFixture.json'
       // }).as('getTodos');
        
       
        cy.get('test')
       
    })



});