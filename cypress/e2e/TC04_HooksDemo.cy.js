describe('Hooks Example',function(){
    beforeEach('Perform Login and Logout',function(){
        cy.visit('/login')
        cy.get('input[placeholder="Email"]').type('testautomation@gmail.com')
        cy.get('input[placeholder="Password"]').type('test@1234')
        cy.get('button[type="submit"]').click()      
    })

    it('Create new post',function(){
       cy.contains('New Article').click()
       cy.get('input[placeholder="Article Title"]').type('Demo Title')
       cy.get('input[placeholder="What\'s this article about?"]').type('Elections Result')
       cy.get('textarea[placeholder="Write your article (in markdown)"]').type('India winning the election by 2/3rd of majority')
       cy.get('input[placeholder="Enter tags"]').type('#ElectionResults2024')
       cy.contains('Publish Article').click()
    })

    it('Verify the newly created post',function(){
        cy.contains('Global Feed').click()
        cy.get('.article-preview:nth-child(1)').should('contain','Demo Title')
    })

    afterEach(function(){
        cy.contains('Settings').click()
        cy.contains("Or click here to logout.").click()
    })
})