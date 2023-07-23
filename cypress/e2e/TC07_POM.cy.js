import '../e2e/pages/landingPage'
import LandingPage from '../e2e/pages/landingPage'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import SettingsPage from './pages/settingsPage'

describe('POM Test',function(){

    const landingPage = new LandingPage()
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const settingsPage = new SettingsPage()
    let data

    beforeEach(function(){
        cy.fixture('example').then((value) => {
            data = value
        })
    })

    it('Login using POM',function(){
        cy.visit('/')
        landingPage.clickOnSignIn()
        loginPage.enterLogin(data.email,data.password)
        homePage.checkYourFeedIsVisible()
        homePage.clickOnSettings()
        settingsPage.clickOnLogoutButton()
    })
})