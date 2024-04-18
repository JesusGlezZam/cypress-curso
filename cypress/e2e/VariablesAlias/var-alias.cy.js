describe('Variables y Aliases',() =>{
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Registra la excepción en la consola, pero no la marca como fallida
            console.error('Uncaught exception:', err.message);
            return false;
        });

        // Realiza la visita a la URL antes de cada test
        cy.visit('https://demoqa.com/modal-dialogs');
    });

    it('funcionamiento de variables al retornar valor',() =>{
       // const smallModalText = cy.get('#showSmallModal').text();
        cy.get('#showSmallModal').then($elemento => {
            const  smallModalText = $elemento.text;
            cy.log('LOG ' +smallModalText);
            $elemento.click()
            
           // cy.get('#example-modal-sizes-title-sm').contains(smallModalText,'Small Modal')
          });
    })
  // no funciono
    it('Aliases', function() {
        cy.get('#showSmallModal').invoke('text').as('InvokeText');
      });
      
      it('Share Context', function() {
        cy.get('@InvokeText').then((text) => {
          cy.log("INVOKE: " + text);
          // Ahora puedes usar el texto en la selección
          cy.get('selector').contains(text);
        });
      });

})