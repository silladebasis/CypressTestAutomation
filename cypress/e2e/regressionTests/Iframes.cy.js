describe('IFrame Practice',() => {
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
    })

    it('IFrame test',function(){
        cy.get('#mce_0_ifr').within(function($iFrame){
            const frames = $iFrame.contents().find('#tinymce')
            cy.wrap(frames).clear().type('Hello Frames')
        })
    })
})