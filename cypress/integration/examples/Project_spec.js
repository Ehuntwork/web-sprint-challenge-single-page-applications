describe('My Project tests',function(){
    it('Adds text to box',function(){
       cy.visit('http://localhost:3000/pizza')
       
    })

    it('can type a text', () => {
        cy.get('input[name = name]')
          .type('Emily')
          .should('have.value', 'Emily')
      })

    it('Checkboxes', () => {
        cy.get('[type="checkbox"]').check()
    })

    it('Submits',()=>{
        cy.get('form').submit()
    })
})