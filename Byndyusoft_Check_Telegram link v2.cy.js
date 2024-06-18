describe("Byndyusoft test task", () => {
  it("have correct tg link", () => {
    cy.visit("https://www.google.ru");

    cy.get("#APjFqb").type("Byndyusoft");
    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();
    cy.get(
      '.tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .notranslate > .q0vns > .CA5RN > .byrV5b > .tjvcx'
    ).then(($el) => {
      const url = $el.text();

      cy.visit(url);

      cy.origin(url, () => {
        cy.get(".knowMore__container > .btn").click();
        cy.get(".popup-callback__contacts-tg")
          .should("have.attr", "href") // Проверка наличия ссылки в поп апе
          .and("eq", "https://t.me/alexanderbyndyu");
      });
    });
  });
});
