# Projet PHP + MySQL avec Docker + phpMyAdmin + Cypress

## Prérequis

- Docker Desktop installé
- Git (obligatoire pour les github actions)
- Node.js (pour Cypress)

## Installation

1. Cloner le projet
2. Installer les dépendances Node.js :

```bash
npm install
```

## Lancement du projet

1. Ouvrir un terminal dans le dossier du projet
2. Exécuter la commande :

```bash
docker compose up --build
```

Ou utiliser le script npm:

```bash
npm run docker:up
```

3. Accéder à l'application :

- Site web : [http://localhost:8080](http://localhost:8080)
- phpMyAdmin : [http://localhost:8081](http://localhost:8081)
  - Login : `root`
  - Mot de passe : `root`

## Tests avec Cypress

Le projet utilise Cypress pour les tests end-to-end. Pour lancer les tests:

```bash
npm run cypress test
```

Ou pour ouvrir l'interface Cypress directement:

```bash
npx cypress open
```

Les tests sont également exécutés automatiquement via GitHub Actions à chaque push.

## Scripts disponibles

- `npm run cypress test` - Lance Cypress en mode interactif
- `npm run docker:up` - Démarre les conteneurs Docker
- `npm run docker:down` - Arrête les conteneurs Docker

## Structure du projet

- `./src` - Dossier des fichiers PHP
- `./cypress` - Tests end-to-end
- `.github/workflows` - Configuration GitHub Actions

## Infos utiles

- La base de données créée par défaut est `testdb`
- Utilisateur MySQL créé : `user` / `userpass`
- Le projet utilise PHP 8.2 avec Apache
- Si vous avez supprimé le dossier `node_modules`, n'oubliez pas de refaire `npm install` pour réinstaller les dépendances
