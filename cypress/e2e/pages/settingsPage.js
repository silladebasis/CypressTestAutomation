class SettingsPage{

    getLogOutButton(){return 'Or click here to logout.'}

    clickOnLogoutButton(){
        cy.contains(this.getLogOutButton()).click()
    }
}

export default SettingsPage