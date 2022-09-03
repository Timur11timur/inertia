describe('Authentication', ()  => {
    it('provides feedback for invalid login credentials', () => {
        cy.refreshDatabase();

        cy.visit('/login');

        cy.get('#email').type('foo@example.com');
        cy.get('#password').type('password');
        cy.contains('button', 'Log In').click();

        cy.contains('The provided credentials do not match our records.');
    });

    it('signs a user in', () => {
        cy.refreshDatabase();

        cy.create('App\\Models\\User', { email: 'joe@example.com'});

        cy.visit('/login');

        cy.get('#email').type('joe@example.com');
        cy.get('#password').type('password');
        cy.contains('button', 'Log In').click();

        cy.assertRedirect('/');
    });

    it.only('visits the dashboard', () => {
        cy.visit('/').assertRedirect('/login');

        cy.login({ name: 'JohnDoe'});
        cy.visit('/').contains('Welcome Back, JohnDoe!');

        cy.currentUser().its('name').should('eql', 'JohnDoe')
    });
});
