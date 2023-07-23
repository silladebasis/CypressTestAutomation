describe('Fixtures Example',function(){

    // const email = 'testautomation@gmail.com'
    // const password = 'test@1234'
    // const passwordWrong = 'test@123'
    let data
    beforeEach(function(){
        cy.fixture('example').then((value) => {
            data = value
        })
    })

    it('Perform Login with correct password',function(){
        cy.visit('/login')
        cy.get('input[placeholder="Email"]').type(data.email)
        cy.get('input[placeholder="Password"]').type(data.password)
        cy.get('button[type="submit"]').click()      
    })

    it('Perform Login with wrong password',function(){
        cy.visit('/login')
        cy.get('input[placeholder="Email"]').type(data.email)
        cy.get('input[placeholder="Password"]').type(data.passwordWrong)
        cy.get('button[type="submit"]').click()      
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})