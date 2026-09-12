# 📰 Discover Articles

> 🌐 **Discover Articles** est une plateforme web développée avec **Angular** et **Node.js**, permettant la création, la gestion et la publication d'articles à travers une interface moderne et interactive.

## 📋 Description

**Discover Articles** est une application web dédiée à la gestion et à la publication de contenus.

La plateforme propose une interface frontend développée avec **Angular** et communique avec un backend **Node.js** à travers une API REST.

L'objectif du projet est de mettre en pratique le développement d'une application web **Full-Stack**, en séparant clairement la partie frontend de la partie backend.

## 🚀 Fonctionnalités

* 📰 Affichage des articles
* 🔎 Consultation des articles
* ✍️ Création d'articles
* 📝 Modification des articles
* 🗑️ Suppression des articles
* 📢 Publication des contenus
* 🔄 Communication entre Angular et l'API backend
* ⚡ Interface utilisateur interactive
* 📱 Interface responsive

## 🏗️ Architecture

L'application repose sur une architecture **Frontend / Backend / API** :

```text
┌──────────────────────┐
│      Angular         │
│      Frontend        │
└──────────┬───────────┘
           │
           │ HTTP / REST API
           ▼
┌──────────────────────┐
│      Node.js         │
│       Backend        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Database        │
└──────────────────────┘
```

## 🛠️ Technologies utilisées

### Frontend

* **Angular**
* **TypeScript**
* **HTML5**
* **CSS3**

### Backend

* **Node.js**
* **REST API**

### Outils

* **Git**
* **GitHub**
* **npm**
* **Postman**

## 🔗 API

Le frontend Angular communique avec le backend Node.js à travers des requêtes HTTP afin de :

* Récupérer les articles
* Ajouter de nouveaux articles
* Modifier les contenus
* Supprimer des articles
* Gérer la publication des articles

## 📂 Structure du projet

```text
Discover-Articles/
│
├── frontend/
│   └── Angular/
│       ├── src/
│       ├── angular.json
│       └── package.json
│
├── backend/
│   └── Node.js/
│       ├── routes/
│       ├── controllers/
│       ├── models/
│       ├── server.js
│       └── package.json
│
└── README.md
```

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Kais-a11/Discover-Articles.git
```

```bash
cd Discover-Articles
```

### 2. Installer les dépendances du frontend

```bash
cd frontend
npm install
```

Lancer Angular :

```bash
ng serve
```

Le frontend sera disponible sur :

```text
http://localhost:4200
```

### 3. Installer les dépendances du backend

Dans un autre terminal :

```bash
cd backend
npm install
```

Démarrer le serveur Node.js :

```bash
npm start
```

> ⚠️ Les commandes et les ports peuvent varier selon la configuration actuelle du projet.

## 🌐 Demo

🔗 **Application en ligne :**

https://discover-articles-six.vercel.app/

## 🖥️ Aperçu

Ajoutez ici des captures d'écran de votre application :

```text
📸 Homepage
📸 Liste des articles
📸 Détails d'un article
📸 Création d'un article
📸 Gestion des articles
```

## 🎯 Objectifs du projet

Ce projet m'a permis de renforcer mes compétences en développement **Full-Stack** et de mieux comprendre la communication entre une application frontend et un backend exposant une API REST.

### Compétences développées

* Développement d'interfaces avec Angular
* Utilisation de TypeScript
* Création de composants Angular
* Communication avec une API REST
* Développement backend avec Node.js
* Gestion des requêtes HTTP
* Organisation d'une architecture Frontend / Backend
* Gestion des articles et des contenus
* Utilisation de Git et GitHub

## 📚 Ce que j'ai appris

À travers ce projet, j'ai approfondi ma compréhension du développement d'applications **Full-Stack**, notamment la communication entre Angular et un serveur Node.js à travers une API REST.

J'ai également travaillé sur l'organisation d'un projet séparant clairement les responsabilités du frontend et du backend.

## 👨‍💻 Auteur

**Kais Barhoumi**

Ingénieur en Informatique — Développement Web et Mobile

* GitHub: [Kais-a11](https://github.com/Kais-a11)
* LinkedIn: [Barhoumi Kais](https://www.linkedin.com/in/barhoumi-kais-474607211/)

---

⭐ Si vous trouvez ce projet intéressant, n'hésitez pas à laisser une étoile au repository.
