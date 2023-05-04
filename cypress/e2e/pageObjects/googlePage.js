class GooglePage {
    visit() {
        cy.visit('https://www.google.com');
    }

    search(text) {
        cy.get('input[name="q"]').type(text + '{enter}');
    }
}

export default GooglePage;