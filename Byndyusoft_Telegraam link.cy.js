describe('Check the Telegram link', () => {

  it('Google search', () => {
    cy.visit('https://www.google.ru/')  
    cy.get('textarea[type="search"]').click().type('Byndyusoft{enter}')
    cy.get('#search a').first().invoke('removeAttr', 'target').click()
    
    cy.origin('https://byndyusoft.com/', () => { 
    cy.scrollTo('bottom')
    cy.get('section[class="knowMore"]')
    cy.contains('Заказать презентацию').click()
    cy.contains('в Телеграм').should('have.attr', 'href', 'http://t.me/alexanderbyndyu')
  })
  })  
})

//
//it ('Byndyusoft', () => {
  //  cy.visit('https://byndyusoft.com/')  
  //  cy.scrollTo('bottom')
  //  cy.contains('Заказать презентацию').click()
  //  cy.contains('в Телеграм').should('have.attr', 'href', 'http://t.me/alexanderbyndyu') 
  //});






//.invoke('removeAttr', 'target')
//it ('Contacts', () => {
//    cy.visit('https://byndyusoft.com/')
//    cy.scrollTo('bottom')
//    cy.contains('Заказать презентацию').click()
//    cy.contains('в Телеграм').click()
//cy.get('textarea[type="search"]').click().type('Byndyusoft{enter}')
//cy.contains('https://byndyusoft.com').invoke('removeAttr', 'target').click()


//it ('Contacts', () => {
  //   cy.visit('https://byndyusoft.com/')
  //   cy.scrollTo('bottom')
  //   cy.contains('Заказать презентацию').click()
  //   cy.get('a [href= "https://t.me/alexanderbyndyu"]').click()