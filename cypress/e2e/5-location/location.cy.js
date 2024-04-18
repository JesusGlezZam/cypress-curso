describe('Location Demo', function() {
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');
    });


    it('should contain Swag Labs', function() {
        cy.get('.login_logo').should('contain', 'Swag Labs');
    });

    it('should use HTTPS', function() {
        cy.location("protocol").should('contain', 'https');
    });

    it('URL should be https://www.saucedemo.com/', function() {
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('should redirect to /inventory',function(){
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.location('pathname').should('eq','/inventory.html');
    });

    
});