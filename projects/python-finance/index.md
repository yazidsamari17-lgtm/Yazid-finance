---
title: "Optimisation de portefeuille"
---

# Optimisation de portefeuille

<nav class="top-nav" aria-label="Navigation du projet">
  <a href="{{ '/' | relative_url }}">Accueil</a>
  <a href="{{ '/README.html' | relative_url }}">Portfolio</a>
  <a href="{{ '/projects/analyse-brvm/' | relative_url }}">BRVM</a>
  <a href="{{ '/projects/backtesting-trading/' | relative_url }}">Backtesting</a>
  <a href="{{ '/projects/python-finance/' | relative_url }}">Python</a>
</nav>

## Contexte et problématique

Ce projet a pour objectif d'explorer les bases de la théorie moderne du portefeuille, notamment le compromis entre rendement attendu et risque. Il s'intéresse à la manière dont la diversification et la répartition des actifs influencent les performances potentielles d'un portefeuille.

La question principale est de savoir comment comparer des allocations possibles et décrire leur profil de risque, tout en précisant clairement les hypothèses et les limites des données historiques.

## Objectifs

- Étudier le rôle de la diversification dans la gestion de portefeuille.
- Analyser le lien entre rendement attendu, volatilité et corrélations.
- Construire une approche méthodique de comparaison d'allocations.
- Identifier les limites d'une optimisation basée sur des données passées.

## Méthodologie

1. Sélectionner les actifs et séries de prix à partir de données documentées et accessibles.
2. Déterminer la période d'observation, la fréquence des données et les conventions de calcul.
3. Calculer les rendements et vérifier la qualité des séries.
4. Étudier la volatilité, les corrélations et la structure de risque du portefeuille.
5. Comparer plusieurs allocations définies à l'avance.
6. Documenter les hypothèses, les biais éventuels et la prudence devant les résultats passés.

## Données et sources

Les données utilisées proviendront de sources publiques, transparentes et documentées, notamment des séries historiques d'actifs financiers. Le recours à des données de qualité et la précision des conventions de calcul sont essentiels pour éviter les interprétations trompeuses.

## Outils utilisés ou envisagés

- Python
- Pandas et NumPy pour la manipulation et le calcul
- Matplotlib pour la visualisation
- Excel pour les vérifications et présentations complémentaires

## Indicateurs financiers

Les indicateurs prévus incluent :

- rendement moyen sur la période observée ;
- volatilité ;
- matrice de corrélation ;
- pondérations des actifs ;
- rendement et risque du portefeuille ;
- ratio de Sharpe, seulement si ses hypothèses sont explicitement satisfaites.

## Résultats et interprétation

Aucun portefeuille ni performance historique ne sont présentés comme établis avec certitude. Le projet sert avant tout à développer une compréhension théorique et méthodologique des compromis entre risque et rendement.

## État d'avancement

Travail en préparation : les actifs, les données, les calculs et leurs interprétations restent à définir et à vérifier.

---

[Retour à l'accueil]({{ '/' | relative_url }}) · [Présentation du portfolio]({{ '/README.html' | relative_url }})

