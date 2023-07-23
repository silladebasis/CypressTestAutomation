describe('Checkbox Functionality',() => {
    it('Handle different radion button',function(){
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/')
        //Basic Checkbox validation
        cy.get('#checkbox-v-2b').should('not.be.checked').click({force:true})

        //Modern checkbox validation
        cy.get('#checkbox-h-2c').check({force:true}).should('be.checked')
    })
})