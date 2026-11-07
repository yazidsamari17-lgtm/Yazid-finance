---
title: "Optimisation de portefeuille"
---

# Optimisation de portefeuille

<nav class="top-nav" aria-label="Navigation des projets">
  <a href="{{ '/' | relative_url }}">Accueil</a>
  <a href="{{ '/projects/analyse-brvm/' | relative_url }}">BRVM</a>
  <a href="{{ '/projects/backtesting-trading/' | relative_url }}">Backtesting</a>
  <a href="{{ '/projects/python-finance/' | relative_url }}">Python & finance</a>
</nav>

## Contexte et problématique

Ce projet d'étude porte sur la diversification et la construction de portefeuille. Il vise à mieux comprendre le compromis entre rendement attendu et risque, ainsi que l'effet des corrélations entre actifs.

La question étudiée est la suivante : comment comparer plusieurs allocations et décrire leurs profils de risque à partir de données historiques, en explicitant les hypothèses et les limites de la méthode ?

## Objectifs

- Comprendre le rôle de la diversification.
- Étudier la relation entre rendements, volatilité et corrélations.
- Comparer des allocations selon des règles explicites.
- Décrire les limites d'une analyse fondée sur des observations historiques.

## Méthodologie

1. Sélectionner des actifs et des séries de prix documentées, selon leur disponibilité.
2. Définir la période, la fréquence et les conventions de rendement.
3. Contrôler les séries et traiter les données manquantes de manière documentée.
4. Calculer les rendements, la volatilité et les corrélations.
5. Comparer des allocations prédéfinies et, si les données le permettent, explorer une optimisation moyenne-variance.
6. Décrire les hypothèses, les biais et les limites des données historiques.

## Données et sources

Des séries historiques de prix ou de rendements issues de sources publiques et identifiables sont envisagées. Les actifs, la période, les unités et les droits d'utilisation devront être documentés avant l'analyse.

## Outils utilisés ou envisagés

Python, Pandas et NumPy pour les calculs ; Matplotlib pour les graphiques ; Excel pour des vérifications complémentaires.

## Indicateurs financiers

Rendement moyen, volatilité, matrice de corrélation, pondérations des actifs, rendement et risque du portefeuille. Le ratio de Sharpe pourra être étudié uniquement si la fréquence, le taux sans risque et les conventions sont explicités.

## Résultats et interprétation

Aucun résultat empirique ni performance de portefeuille n'est revendiqué à ce stade. Les conclusions dépendront de la qualité des données et des hypothèses finalement retenues.

## État d'avancement

Projet en préparation : les actifs, les sources, les paramètres et les calculs restent à sélectionner et à vérifier.

---

[Retour à l'accueil]({{ '/' | relative_url }})
