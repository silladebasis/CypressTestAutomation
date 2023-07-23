describe('Browser Controls Functions',() => {
    it('Browser functions examples',function(){
        cy.visit('https://demo.realworld.io/#/')
        cy.xpath('//a[contains(text(),"Sign in")]').click()
        cy.go('back')
        cy.go('forward')
        cy.xpath('//input[@placeholder="Email"]').type('testautomation@gmail.com')
        cy.xpath('//input[@placeholder="Password"]').type('test@1234')
        cy.xpath('//button[contains(text(),"Sign in")]').click()
    })
})