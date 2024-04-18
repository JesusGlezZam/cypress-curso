import homeSaucePage from "../../pages/homeSaucePage";
import inventoryPage from "../../pages/saucedemo/inventoryPage";

const tests= require('../../fixtures/data-driven/sauceUser');

// ejemplo de POM
describe('Data driven Test reading data from a JSON file', function(){
    beforeEach(function(){
       cy.visit('https://www.saucedemo.com/');
    });

    tests.forEach(test => {
        
        it(test.name, function(){

            homeSaucePage.typeUsername(test.username);
            homeSaucePage.typePassword(test.password);
            homeSaucePage.clickLogin();
            
            if(test.name === 'Standar Username'){
                inventoryPage.elements.titleSpan().should('have.text',test.expected)
            }else{
                cy.get('[data-test="error"]').should('contain.text',test.expected);  
            }
          
        });  

    }); 

// ejemplo de commands creando funciones
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