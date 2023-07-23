describe('Hooks Basics',function(){
    before(function(){
        cy.log('Before block execution starts and executes only once')
    })
    beforeEach(function(){
        cy.log('Before each block starts')
    })

    it('Search Item',function(){
        cy.log('Search Item')
    })

    it('Order Product',function(){
        cy.log('Order Product')
    })

    it('Checkout and Payment Step',function(){
        cy.log('Check out and payment step')
    })

    afterEach(function(){
        cy.log('after each step execution')
    })

    after(function(){
        cy.log('After Block execution stops and executes once')
    })
})