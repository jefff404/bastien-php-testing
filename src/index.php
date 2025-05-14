<?php
// Accès depuis n'importe quel site ou appareil (*)
header("Access-Control-Allow-Origin: *");

$host = 'db';
$db   = 'testdb';
$user = 'user';
$pass = 'userpass';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    echo "Connexion réussie à la base de données.";
} catch (\PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
