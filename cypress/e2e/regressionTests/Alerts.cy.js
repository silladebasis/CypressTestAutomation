describe('Alerts Functionality',() => {
    it('Handle simple alert',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',(str) => {
            expect(str).to.eq('I am a JS Alert')
        })
        cy.get('#result').should('contain.text','You successfully clicked an alert')
    })

    it('Confirmation Alert - Ok button',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str) => {
            expect(str).to.eq('I am a JS Confirm')
        })
        cy.get('#result').should('contain.text','You clicked: Ok')
    })

    it('Confirmation Alert - Cancel button',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str) => {
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('contain.text','You clicked: Cancel')
    })

    it('Prompt Alert - Cancel button',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function($wind){
            cy.stub($wind,'prompt').returns('Hello Alert')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('contain.text','Hello Alert')
    })
})