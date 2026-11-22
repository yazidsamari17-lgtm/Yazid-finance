# Portfolio — Yazid SAMARI

Portfolio professionnel en français, consacré au parcours, aux compétences et aux travaux de Yazid SAMARI. Le projet présenté dans la rubrique Projets est l'analyse financière provisoire de Sonatel.

## Structure

```text
.
├── index.html
├── favicon.svg
├── styles.css
├── extras.css
├── script.js
├── gallery.js
├── sonatel.js
├── projets/
│   └── sonatel.html
└── assets/
    └── galerie/
        ├── galerie.json
        └── LISEZ-MOI.md
```

## Lancer le site en local

Les données de la galerie sont chargées avec `fetch`. Il faut donc ouvrir le site avec un petit serveur HTTP plutôt qu'en double-cliquant sur `index.html`.

### Avec Python

Depuis le dossier du projet :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000` dans le navigateur. Pour arrêter le serveur : `Ctrl+C`.

### Avec VS Code

Installer l'extension **Live Server**, faire un clic droit sur `index.html`, puis choisir **Open with Live Server**.

## Déploiement sur Vercel sans GitHub

1. Ouvrir le tableau de bord Vercel et choisir **Add New → Project**.
2. Utiliser l'option d'importation/déploiement manuel disponible dans l'interface, ou installer la CLI Vercel.
3. Depuis le dossier du projet, exécuter `vercel` puis suivre les questions affichées.
4. Pour publier en production, exécuter `vercel --prod`.

Le projet est un site statique : aucun framework ni commande de compilation n'est nécessaire. Laisser le répertoire de sortie à la racine (`.`) si Vercel le demande.

## Galerie

Placer les images dans `assets/galerie/`, puis les déclarer dans `assets/galerie/galerie.json`. Le modèle et les consignes se trouvent dans `assets/galerie/LISEZ-MOI.md`.

## Dépendances externes

- Google Fonts : DM Sans et Manrope.
- Chart.js 4.4.1 via jsDelivr pour les graphiques.

Les fonctions principales du site (navigation, progression de lecture, animations, année du pied de page) restent indépendantes de Chart.js. Les graphiques nécessitent une connexion internet pour charger la bibliothèque externe.

## À vérifier avant publication

- Confirmer que les chiffres et interprétations de l'analyse Sonatel correspondent à la version définitive du classeur de travail.
- Vérifier les liens de contact et le profil LinkedIn.
- Ajouter uniquement des photos autorisées dans la galerie.
- Tester les deux pages sur mobile et ordinateur.
