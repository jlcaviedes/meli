describe('products', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('should search product mouse', () => {
		const newItem = 'mouse';
		cy.get('[data-test=input-search]').type(`${newItem}{enter}`);
		cy.get('[data-test=list-results]').get('a').should('have.length', 4);
		cy.get('[data-test=list-results]').get('a').contains('Mouse');
	});

	it('should search product mouse and go to detail page', () => {
		const newItem = 'mouse';
		cy.get('[data-test=input-search]').type(`${newItem}{enter}`);
		cy.get('[data-test=list-results]').get('a').first().click();
		cy.get('[data-test=title]').should('have.text', 'Mouse Inalámbrico Logitech  M280 Negro');
		cy.get('[data-test=currency]').contains('$1,520');
	});
});
