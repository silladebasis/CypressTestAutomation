class HomePage{

    getYourFeed(){return 'Your Feed'}

    getGlobalFeed(){return 'Global Feed'}
    
    getHome(){return 'Home'}

    getNewPost(){return 'New Post'}

    getSettings(){return 'Settings'}

    checkYourFeedIsVisible(){
        cy.contains(this.getYourFeed()).should('be.visible')
    }

    clickOnSettings(){
        cy.contains(this.getSettings()).click()
    }
}

export default HomePage