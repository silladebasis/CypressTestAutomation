describe('Custom Command Test',function(){

    let data
    beforeEach(function(){
        cy.visit('/login')
        cy.fixture('example').then((value) => {
            data = value
        })
    })

    it('Perform Login with correct password',function(){
        cy.login(data.email,data.password)
        cy.wait(2000)
        cy.get('a[href="#/setting"]').click()
        cy.logout()
    })
})