describe('Fixtures Demo (sanity)',{tags: '@sanityTag'},function(){
    beforeEach(function(){
            cy.visit('https://www.saucedemo.com/');
            cy.fixture('fixtures-demo/sauceCredentials').then(credentials=>{
                this.credentials=credentials;
            });
    });

    it('Standar Username', function(){
        cy.get('[data-test="username"]').type(this.credentials.standard_user);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('contain.text','Products');  
    });

    it('locked out Username', function(){
        cy.get('[data-test="username"]').type(this.credentials.lockedUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.');  
    });

    it('incorrect Username', function(){
        cy.get('[data-test="username"]').type(this.credentials.dummyUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');  
    });

    it('incorrect password', function(){
        cy.get('[data-test="username"]').type(this.credentials.standard_user);
        cy.get('[data-test="password"]').type(this.credentials.dummyPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');  
    });

});