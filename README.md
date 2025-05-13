# Projet PHP + MySQL avec Docker + phpMyAdmin

## Prérequis

- Docker Desktop installé
- Git (obligatoire pour les github actions)
- Github Actions 

## Lancement du projet

1. Ouvrir un terminal dans le dossier du projet
2. Exécuter la commande :

```bash
docker compose up --build
```

3. Accéder à l'application :

- Site web : [http://localhost:8080](http://localhost:8080)
- phpMyAdmin : [http://localhost:8081](http://localhost:8081)
  - Login : `root`
  - Mot de passe : `root`

## Infos utiles

- Dossier des fichiers PHP : `./src`
- La base de données créée par défaut est `testdb`
- Utilisateur MySQL créé : `user` / `userpass`
