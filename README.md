<div align="center">

# 🎙️ My First Backend — Frank Sinatra API

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Frank_Sinatra2%2C_Pal_Joey.jpg/330px-Frank_Sinatra2%2C_Pal_Joey.jpg" alt="Frank Sinatra" width="220" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />

<br /><br />

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Port](https://img.shields.io/badge/Port-8080-blue?style=for-the-badge)
![Auth](https://img.shields.io/badge/Auth-HTTP_Basic-orange?style=for-the-badge)

**Un serveur web HTTP complet développé avec Node.js et Express autour de l'univers de Frank Sinatra.**  
*Projet avec soutenance — Colint School*

</div>

---

## 📖 Présentation du projet

**My First Backend** est une application backend en **Node.js** utilisant le framework **Express**.  
Elle expose plusieurs routes HTTP (`GET`) permettant d'obtenir des informations biographiques et musicales sur **Frank Sinatra**, d'effectuer une redirection vers sa photo officielle, et de gérer un accès restreint via une **authentification HTTP Basic**.

> [!IMPORTANT]
> Les fichiers `package.json`, `package-lock.json` et le dossier `node_modules/` ne sont **pas envoyés sur GitHub** (conformément aux bonnes pratiques et au fichier `.gitignore`).  
> Suivez les commandes complètes ci-dessous pour les générer et installer les dépendances sur votre machine.

---

## 🛠️ Prérequis

Avant de commencer, vérifiez que **Node.js** et **npm** sont bien installés sur votre ordinateur en exécutant ces commandes dans votre terminal :

```bash
node --version
npm --version
```

*(Si Node.js n'est pas installé, téléchargez-le sur [https://nodejs.org/](https://nodejs.org/).)*

---

## 🚀 Installation étape par étape (Commandes complètes)

Ouvrez votre terminal et exécutez les commandes suivantes dans l'ordre :

### 1️⃣ Cloner le dépôt et entrer dans le dossier du projet

```bash
git clone <URL_DE_VOTRE_REPO_GITHUB>
cd my_first_backend
```

*(Si vous avez déjà téléchargé le dossier sur votre machine, déplacez-vous simplement dedans :)*
```bash
cd my_first_backend
```

### 2️⃣ Initialiser le projet Node.js (création de `package.json`)

Cette commande génère automatiquement le fichier `package.json` avec la configuration par défaut :

```bash
npm init -y
```

### 3️⃣ Installer le framework Express (création de `node_modules/` et `package-lock.json`)

Cette commande télécharge et installe **Express** ainsi que toutes ses dépendances :

```bash
npm install express
```

---

## ▶️ Démarrer le serveur

Une fois Express installé, lancez le serveur avec la commande suivante :

```bash
node app.js
```

> [!TIP]
> Lorsque le serveur démarre correctement, le message suivant s'affiche dans votre terminal :  
> `Serveur started en https// 0,0,0,0 : 8080`  
> Pour arrêter le serveur à tout moment, appuyez sur **`Ctrl + C`** dans le terminal.

---

## 🌐 Liste des routes disponibles

Le serveur écoute sur **`http://localhost:8080`**. Voici l'ensemble des routes accessibles :

| Méthode | Route | Code HTTP | Description & Réponse |
| :---: | :--- | :---: | :--- |
| ![GET](https://img.shields.io/badge/GET-2ea44f?style=flat-square&logoColor=white) | `/` | `200 OK` | Renvoie **aléatoirement** une chanson de Frank Sinatra parmi une liste de 20 titres (*My Way*, *Fly Me to the Moon*, etc.). |
| ![GET](https://img.shields.io/badge/GET-2ea44f?style=flat-square&logoColor=white) | `/birth_date` | `200 OK` | Renvoie la date de naissance : `December 12, 1915` |
| ![GET](https://img.shields.io/badge/GET-2ea44f?style=flat-square&logoColor=white) | `/birth_city` | `200 OK` | Renvoie la ville de naissance : `Hoboken, New Jersey` |
| ![GET](https://img.shields.io/badge/GET-2ea44f?style=flat-square&logoColor=white) | `/wives` | `200 OK` | Renvoie les épouses : `Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx` |
| ![GET](https://img.shields.io/badge/GET-2ea44f?style=flat-square&logoColor=white) | `/picture` | `302 Found` | Redirige automatiquement vers la photo Wikipédia de Frank Sinatra. |
| ![GET](https://img.shields.io/badge/GET-2ea44f?style=flat-square&logoColor=white) | `/public` | `200 OK` | Route publique : `Everybody can see this page` |
| ![GET](https://img.shields.io/badge/GET-f39c12?style=flat-square&logoColor=white) | `/protected` | `200` / `401` | Route protégée par mot de passe (`admin` / `admin`). |

---

## 🧪 Tester toutes les routes (Commandes complètes)

Pendant que `node app.js` tourne dans un premier terminal, ouvrez un **second terminal** et testez chaque route avec ces commandes complètes :

### 🎵 1. Chanson aléatoire (`/`)
```bash
curl http://localhost:8080/
```

### 📅 2. Date de naissance (`/birth_date`)
```bash
curl http://localhost:8080/birth_date
```

### 🏙️ 3. Ville de naissance (`/birth_city`)
```bash
curl http://localhost:8080/birth_city
```

### 💍 4. Liste des épouses (`/wives`)
```bash
curl http://localhost:8080/wives
```

### 🖼️ 5. Redirection vers la photo (`/picture`)
```bash
curl -i http://localhost:8080/picture
```

### 🌍 6. Page publique (`/public`)
```bash
curl http://localhost:8080/public
```

### 🔐 7. Page protégée (`/protected`)

> [!NOTE]
> Identifiants requis pour accéder à la route `/protected` :
> - **Utilisateur :** `admin`
> - **Mot de passe :** `admin`

- **Test sans identifiants (refusé — renvoie `401 Not authorized`) :**
  ```bash
  curl -i http://localhost:8080/protected
  ```

- **Test avec de mauvais identifiants (refusé — renvoie `401 Not authorized`) :**
  ```bash
  curl -i -u admin:wrongpassword http://localhost:8080/protected
  ```

- **Test avec les bons identifiants (autorisé — renvoie `200 Welcome, authenticated client`) :**
  ```bash
  curl -i -u admin:admin http://localhost:8080/protected
  ```

---

## 📂 Structure du dépôt

```text
my_first_backend/
├── .gitignore       # Ignore node_modules/, package.json et package-lock.json
├── README.md        # Documentation complète du projet
└── app.js           # Code source du serveur Express
```
