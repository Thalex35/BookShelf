# React + Vite


BookShelf permet à chaque utilisateur de rechercher des livres, de constituer sa liste de lecture personnelle et de suivre sa progression (À lire / En cours / Terminé). Le projet intègre un système d'authentification complet et un mode clair/sombre.
✨ Fonctionnalités

🔍 Recherche de livres via l'Open Library API (gratuite, sans clé)
📖 Page détail de chaque livre avec description, auteur, année, pages
🔖 Ma liste — ajouter, retirer, changer le statut d'un livre
🔐 Inscription & connexion avec validation et persistance localStorage
🌙 Mode clair / sombre mémorisé entre les sessions
💾 Persistance — la liste et les préférences survivent au rechargement

# 1. Cloner le repo
git clone https://github.com/Thalex35/bookshelf.git
cd bookshelf

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# Chaque membre travaille sur sa propre branche
git checkout -b feature/ma-fonctionnalite

# Commits clairs et fréquents
git add .
git commit -m "Add BookCard component"
git push origin feature/ma-fonctionnalite

# Ouvrir une Pull Request sur GitHub vers main
# Membre 1 review et merge

⚠️ Authentification front-end uniquement — Les mots de passe sont stockés en clair dans localStorage. Cette approche est acceptable pour un projet académique d'apprentissage React. Dans un vrai projet, utiliser un back-end avec hachage bcrypt et tokens JWT.


💡 Mock data — Pendant la Phase 2, les membres 3, 6 et 7 peuvent utiliser des données fictives pour ne pas dépendre de l'API avant que les contextes soient prêts.
