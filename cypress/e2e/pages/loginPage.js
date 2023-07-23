class LoginPage{

    getEmail(){return 'input[placeholder="Email"]'}
    getPassword(){return 'input[placeholder="Password"]'}
    getSignInButton(){return 'button[type="submit"]'}

    enterLogin(email,password){
        cy.get(this.getEmail()).type(email)   
        cy.get(this.getPassword()).type(password)
        cy.screenshot('Email and Password entered successfully')
        cy.get(this.getSignInButton()).click()
    }
}

export default LoginPage