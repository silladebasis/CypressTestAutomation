describe('Work with XPath',() => {
    it('Xpath Examples',function(){
        cy.visit('/')
        cy.xpath('//a[contains(text(),"Sign in")]').click()
        cy.xpath('//input[@placeholder="Email"]').type('testautomation@gmail.com')
        cy.xpath('//input[@placeholder="Password"]').type('test@1234')
        cy.xpath('//button[contains(text(),"Sign in")]').click()
    })
})