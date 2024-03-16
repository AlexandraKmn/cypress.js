
describe('Автотест для покемонов', function () {
    it('Покупка автара тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('ввести свой логин');
         cy.get('#password').type("ввести свой пароль");
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type("4276807014927948");
         cy.get(':nth-child(1) > .pay_base-input-v2').type("0528");
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type("125");
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type("Gghbuk");
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type("56456");
         cy.get('.payment__submit-button').click();
         cy.get('.payment__padding').contains("Покупка прошла успешно");
         cy.get('.payment__back-button-success').click();
     })

})
