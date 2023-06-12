class GoogleHomePage {
    constructor() {
        this.searchBox = 'input[name="q"]';
    }

    visit() {
        cy.visit('https://www.google.com');
    }

    search(text) {
        cy.get(this.searchBox).type(text + '{enter}');
    }
}

export default GoogleHomePage;