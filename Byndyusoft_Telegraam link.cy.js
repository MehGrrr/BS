describe('Check the Telegram link', () => {

  it('Find-open-check link', () => {
    cy.visit('https://www.google.ru/')  
    cy.get('textarea[type="search"]').click().type('Byndyusoft{enter}')
    cy.get('#search a').first().invoke('removeAttr', 'target').click().wait(500)
    //использую origin, т.к. в cypress не реализована функция для работы с redirect links и новыми вкладками, которые открываются при клике на ссылку в результатах запроса google
    cy.origin('https://byndyusoft.com/', () => { 
        cy.get('section[class="knowMore"]').scrollIntoView().find('span[class="btn btn--lg btn--info js-popup-callback-show"]').click()
    cy.contains('в Телеграм').should('have.attr', 'href', 'http://t.me/alexanderbyndyu')//в ТЗ дают ссылку на телеграм https://t.me/alexanderbyndyu - защищенное соединение, на сайте же ссылка http
    })
  })  
})
