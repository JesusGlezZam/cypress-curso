describe('Commands example', function(){
    
    beforeEach(function(){
            cy.visit('https://www.saucedemo.com/');
    });

    it('Login succesfull',function(){
        cy.typeLogin('standard_user','secret_sauce');
        cy.location('pathname').should('eq','/inventory.html');
        cy.get('.title').should('contain.text','Products');  
        cy.logOut();
        cy.url().should('eq','https://www.saucedemo.com/');
    })

    it('Login lockedOut',function(){
        cy.typeLogin('locked_out_user','secret_sauce');
        cy.get('.error').should('contain.text','Epic sadface: Sorry, this user has been locked out.');  
    })

    it('incorrect Username',function(){
        cy.typeLogin('invalid user','secret_sauce');
        cy.get('.error').should('contain.text','Epic sadface: Username and password do not match any user in this service');  
    })

    it('incorrect Password',function(){
        cy.typeLogin('standard_user','invalidpass');
        cy.get('.error').should('contain.text','Epic sadface: Username and password do not match any user in this service');  
    })




});