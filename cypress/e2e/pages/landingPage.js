class LandingPage{

    clickOnSignIn(){
        cy.contains('Sign in').click()
    }
}

export default LandingPage