describe('Webtable Test',() => {
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/tables')
    })

    it('Webtables practice',function(){
       
        const rows = 2
        const cols = 3
        //check for any value in table
        cy.get('#table1').contains('td','jdoe@hotmail.com').should('be.visible')

        //Check value present on specific row and column
        cy.get(`#table1 tr:nth-child(${rows})`).contains(`td:nth-child(${cols})`,'fbach@yahoo.com').should('be.visible')

        //Check value based on a condition
        cy.get('#table1 tr td:nth-child(2)').each(($ele,index,list) => {
            const firstName = $ele.text()
            if(firstName === 'Frak'){
                cy.get('#table1 tr td:nth-child(4)').eq(index).then(function($dueAmount){
                    const dueAmt = $dueAmount.text()
                    expect(dueAmt).equal('$51.00')
                })
            }
            else{
                cy.log('No matched Name found in the table')
            }
        })
    })
})