//Client Tests

describe('Client should open and render initial page', () => {

    it('Open client', () => {

        cy.clearCookies();
        cy.visit('/');

        cy.contains('Modern A-and-A');
        cy.get('#SignIn').should('contain','Sign In');
        cy.getCookies('sessionID').should('exist');
    
    });

});

describe('Login should show initial screen', () => {

    before(() => {
        cy.clearCookies();
        cy.visit('/');
        cy.get('#SignIn').click();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('sessionID');
    });
 
    it('It should be able to signin - to the Office365 Dev Test Tenant', () => {

        cy.contains('Modern A-and-A');
        cy.get('#Logout').should('contain', 'Logout');

    });

    it('The initial screen should contain the basic menu', () => {

        cy.get('#Logout').should('contain', 'Logout');
        cy.get('#showinbox').should('contain', 'Show Inbox');        
        cy.get('#got').should('contain','Show GOT episodes');
        cy.get('#showindex').should('contain','Home');
    });

    it('It should be able to log out', () => {
        cy.get('#Logout').click();

        cy.contains('Modern A-and-A');
        cy.get('#SignIn').should('contain', 'Sign In');

    });

});

describe('The inbox should be shown', () => {

    before(() => {
        cy.clearCookies();
        cy.visit('/');
        cy.get('#SignIn').click();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('sessionID');
    });

    it('It should show inbox',  () => {
   
        cy.get('#showinbox').click();
       
    });

    it('It should be the inbox of the test user Adele', () => {

        cy.fixture('test-user','utf-8').then((testUser) => {
        
            cy.contains('List my inbox');
            cy.contains(testUser.name);
            cy.contains(testUser.email); 
          
        });        
    });

    it('It should be able to log out', () => {
        cy.get('#Logout').click();

        cy.contains('Modern A-and-A');
        cy.get('#SignIn').should('contain', 'Sign In');
    });

});

describe('We should get a list of GOT Episodes', () => {

    before(() => {
        cy.clearCookies();
        cy.visit('/');
        cy.get('#SignIn').click();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('sessionID');
    });

    it('We should be able to log in and select got episodes', () => {
        cy.get('#got').should('contain', 'Show GOT episodes');
        cy.get('#Logout').should('contain', 'Logout');
        cy.get('#got').click();
    });


    it('It should request GOT episodes', () => {
        cy.contains('Got Episodes');
        cy.contains('Winter is coming');
        cy.contains('Quote:');
    });

    it('It should be able to go home', () => {
        cy.get('#showindex').click();
        cy.contains('List my inbox');
        cy.get('#Logout').should('contain', 'Logout');
    });

    it('It should request GOT episodes directly', () => {
    //    cy.visit('http://localhost:3000/login');
        cy.visit('/got');
        cy.contains('Got Episodes');
        cy.contains('Winter is coming');
        cy.contains('Quote:');
    });

    it('It should be able to log out', () => {
        cy.get('#Logout').click();

        cy.contains('Modern A-and-A');
        cy.get('#SignIn').should('contain', 'Sign In');
    });

});


describe('Client should serve proper headers', () => {

    it('Response header contains proper CSP', () => {
        cy.request('/').should((response) => {
            
           
            console.log(response.headers);

            expect(response).to.have.property('headers');
            expect(response.headers).to.have.property('content-security-policy');

            expect(response.headers['content-security-policy']).to.have.string('default-src \'self\'');
            expect(response.headers['content-security-policy']).to.have.string('block-all-mixed-content');
            expect(response.headers['content-security-policy']).to.have.string('script-src \'self\'');
        });
    });
        
});
