describe('Radio button Functionality',() => {
    it('Handle different radion button',function(){
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        //Basic radio button check
        cy.get('#radio-choice-0a').should('not.be.checked').click({force:true})

        //Modern radio button validation
        cy.get('#radio-choice-h-2b').click({force:true})
    })
})