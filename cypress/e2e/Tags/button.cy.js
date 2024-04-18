describe('Buttons actions (regression)', {tags: '@regressionTag'},()=>{

    beforeEach(()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Registra la excepción en la consola, pero no la marca como fallida
            console.error('Uncaught exception:', err.message);
            return false;
        });
        cy.visit('https://demoqa.com/buttons')
    })

    it('Double click',()=>{
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
    })

    it('Rigth click',()=>{
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    })
})