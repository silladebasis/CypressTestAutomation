Cypress.config('baseUrl','https://demo.realworld.io/#')
describe('Login Test Validation',() => {
    before(() => {
        cy.visit('/login')
    })

    it('Perform Login and Logout',function(){
        cy.get('input[placeholder="Email"]').type('testautomation@gmail.com')
        cy.get('input[placeholder="Password"]').type('test@1234')
        cy.get('button[type="submit"]').click()
        cy.contains('Settings').click()
        cy.contains("Or click here to logout.").click()
    })
})