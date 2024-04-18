/* ==== Test Created with Cypress Studio ==== */
it('DemoRecord', function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Registra la excepción en la consola, pero no la marca como fallida
        console.error('Uncaught exception:', err.message);
        return false;
    });

    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://demoqa.com/webtables');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('jesus');
    cy.get('#lastName').type('Gonzalez');
    cy.get('#userEmail').type('prueba@hotmail.com');
    cy.get('#age').type('29');
    cy.get('#salary').type('5000');
    cy.get('#department').type('sales');
    cy.get('#submit').click();
    /* ==== End Cypress Studio ==== */
});