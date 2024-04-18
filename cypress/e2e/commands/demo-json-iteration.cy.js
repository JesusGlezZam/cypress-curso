// data driven testing using data from a JSON file

const tests= require('../../fixtures/data-driven/sauceUser');

describe('Data driven Test reading data from a JSON file', function(){
    beforeEach(function(){
       cy.visit('https://www.saucedemo.com/');
    });

    tests.forEach(test => {
        
        it(test.name, function(){
            cy.typeLogin(test.username,test.password);
            if(test.name === 'Standar Username'){
                cy.location('pathname').should('eq','/inventory.html');
                cy.get('.title').should('contain.text','Products');  
                cy.logOut();
                cy.url().should('eq','https://www.saucedemo.com/');
            }else{
                cy.get('[data-test="error"]').should('contain.text',test.expected);  
            }
          
        });


    });

});