describe('ASERTIONS DEMO', () => {
    // Configuración para manejar excepciones no capturadas
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Registra la excepción en la consola, pero no la marca como fallida
            console.error('Uncaught exception:', err.message);
            return false;
        });

        // Realiza la visita a la URL antes de cada test
        cy.visit('https://demoqa.com/radio-button');
    });

    // Test case
    it('TDD ASSERTIONS', () => {
        cy.log('LENGTH CHECK');
        cy.get('input[type="radio"]').should('have.length', 3);

        cy.log('CLASS CHECK')
        cy.get('input[type="radio"]').eq(2).should('have.class', 'disabled');

        cy.log('EXIST CHECK')
        cy.get(' mt-3').should('not.exist');


        cy.log('TEXT CHECK')
        cy.get('input[type="radio"]').eq(0).click({force: true});
        cy.get('.mt-3').should('have.text', 'You have selected Yes')
        .and('include.text','Yes') 
        .and('not.contain','Impressive')    
        cy.get('.mt-3').should('contain.text', 'Yes');  
        
        cy.get('.text-success') .should('have.css','color','rgb(40, 167, 69)') 
    });

    it('BDD ASSERTIONS',() =>{
        cy.log('CLASS & LENGTH');
        cy.get('input[type="radio"]').should($inputs => {
            expect($inputs).to.have.lengthOf(3)
            expect($inputs[2]).to.have.class('disabled')
        });

        cy.log('TeXT CHECK')
        cy.get('input[type="radio"]').eq(1).click({force: true});
        cy.get('.mt-3').should($element =>{
            expect($element).to.have.text('You have selected Impressive')
            expect($element).to.include.text('Impressive')
            expect($element).to.not.include.text('Yes')
            expect($element).to.have.css('color', 'rgb(33, 37, 41)');

        })
    });


});