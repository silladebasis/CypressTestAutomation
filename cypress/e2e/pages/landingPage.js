class LandingPage{

    clickOnSignIn(){
        cy.contains('Sign in').click()
        cy.screenshot('Login page launched')
    }
}

export default LandingPage