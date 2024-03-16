describe('Автотесты для авторизации', function () {
    
    it('Правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // открыть сайт
        cy.get('#mail').type('german@dolnikov.ru') ; // найти окно логин и ввести в него логин
        cy.get('#loginButton').should('be.disabled'); // кнопка "Войти" некликабельна
        
        cy.get('#pass').type('iLoveqastudio1'); // найти окно пароль и ввести верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна

        cy.get('#loginButton').click(); // нажать на кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // получить текст об успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible').click(); // Проверка крестика
        })

    it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio/'); // открыть сайт
         cy.get('#forgotEmailButton').click(); // нажать на кнопку забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru') ; // найти окно логин и ввести в него логин
         cy.get('#restoreEmailButton').click(); // нажать на кнопку отправить код
         cy.get('#message').contains('Успешно отправили пароль на e-mail'); // получить текст Успешно отправили пароль на e-mail
         cy.get('#exitMessageButton > .exitIcon').should ('be.visible').click(); // Проверка крестика
        })

        it('Не правильный пароль', function () {
            cy.visit('https://login.qa.studio/'); // открыть сайт
            cy.get('#mail').type('german@dolnikov.ru') ; // найти окно логин и ввести в него логин
            cy.get('#loginButton').should('be.disabled'); // кнопка "Войти" некликабельна
            
            cy.get('#pass').type('iLoveqastudio'); // найти окно пароль и ввести неверный пароль
            cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
    
            cy.get('#loginButton').click(); // нажать на кнопку войти
            cy.get('#message').contains('Такого логина или пароля нет'); // получить текст Такого логина или пароля нет
            cy.get('#exitMessageButton > .exitIcon').should ('be.visible').click(); // Проверка крестика
            })  

            it('Не правильный логин', function () {
                cy.visit('https://login.qa.studio/'); // открыть сайт
                cy.get('#mail').type('german-dol@dolnikov.ru') ; // найти окно логин и ввести в него неверный логин
                cy.get('#loginButton').should('be.disabled'); // кнопка "Войти" некликабельна
                
                cy.get('#pass').type('iLoveqastudio1'); // найти окно пароль и ввести верный пароль
                cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
        
                cy.get('#loginButton').click(); // нажать на кнопку войти
                cy.get('#message').contains('Такого логина или пароля нет'); // получить текст Такого логина или пароля нет
                cy.get('#exitMessageButton > .exitIcon').should ('be.visible').click(); // Проверка крестика
                })    

                it('Проверка валидации', function () {
                    cy.visit('https://login.qa.studio/'); // открыть сайт
                    cy.get('#mail').type('germandolnikov.ru') ; // найти окно логин и ввести в него неверный логин
                    cy.get('#loginButton').should('be.disabled'); // кнопка "Войти" некликабельна
                    
                    cy.get('#pass').type('iLoveqastudio1'); // найти окно пароль и ввести верный пароль
                    cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
            
                    cy.get('#loginButton').click(); // нажать на кнопку войти
                    cy.get('#message').contains('Нужно исправить проблему валидации'); // получить текст Нужно исправить проблему валидации
                    cy.get('#exitMessageButton > .exitIcon').should ('be.visible').click(); // Проверка крестика
                    }) 

                    
                    it('Проверка строчных букв в логине', function () {
                        cy.visit('https://login.qa.studio/'); // открыть сайт
                        cy.get('#mail').type('GerMan@Dolnikov.ru') ; // найти окно логин и ввести в него логин
                        cy.get('#loginButton').should('be.disabled'); // кнопка "Войти" некликабельна
                        
                        cy.get('#pass').type('iLoveqastudio1'); // найти окно пароль и ввести верный пароль
                        cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
                
                        cy.get('#loginButton').click(); // нажать на кнопку войти
                        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // получить текст об успешной авторизации
                        cy.get('#exitMessageButton > .exitIcon').should ('be.visible').click(); // Проверка крестика
                        })  


        })




