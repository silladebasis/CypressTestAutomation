describe('Dropdown Functionality',() => {
    it('Handle static dropdown',function(){
        cy.visit('https://seleniumbase.io/demo_page')
        cy.get('#mySelect').select('Set to 75%').should('have.value','75%')
    })

    it('Handle dynamic dropdown',function(){
        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
        cy.get('.RadDropDownList.RadDropDownList_Sunset').click()
        cy.get('.rddlItem').contains('Konbu').click()
    })

    it('Handle multipe select dropdown',function(){
        cy.visit('https://demo.mobiscroll.com/jquery/select/multiple-select#')
        cy.get('#multiple-select-input').click({force:true})
        cy.get('.mbsc-wheel-item-multi').contains('Health & Beauty').click()
        cy.get('.mbsc-wheel-item-multi').contains('Sports & Outdoors').click()
    })
})