describe('Test de connexion à la base de données', () => {
  it('devrait afficher un message de connexion réussie', () => {
    cy.visit('http://localhost:8080')
    cy.contains('Connexion réussie à la base de données').should('be.visible')
  })

  it('devrait gérer les erreurs de connexion', () => {
    // Simuler une erreur de connexion en modifiant l'URL
    cy.visit('http://localhost:80?error=true')
    cy.contains('Erreur').should('be.visible')
  })
})