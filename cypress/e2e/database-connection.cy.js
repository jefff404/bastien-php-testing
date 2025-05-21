describe('Test de connexion à la base de données', () => {
  it('devrait afficher le message de succès de connexion', () => {
    // Visiter la page
    cy.visit('http://localhost:8080')

    // Vérifier que le message de succès est présent
    cy.contains('Connexion réussie à la base de données.').should('be.visible')
  })
}) 