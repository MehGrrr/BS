describe('Check the Telegram link', () => {

  it('Google search', () => {
    cy.visit('https://www.google.ru/')  
    cy.get('textarea[type="search"]').click().type('Byndyusoft{enter}')
    cy.get('#search a').first().invoke('removeAttr', 'target').click()
    
    cy.origin('https://byndyusoft.com/', () => { 
    cy.get('section[class="knowMore"]').scrollIntoView()
    cy.contains('Заказать презентацию').click()
    cy.contains('в Телеграм').should('have.attr', 'href', 'http://t.me/alexanderbyndyu')
    })
  })  
})
