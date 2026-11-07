---
title: "Optimisation de portefeuille"
---

# Optimisation de portefeuille

**Statut : en préparation.** Cette page décrit un projet d'étude envisagé ; aucune analyse empirique ni performance de portefeuille n'est présentée comme déjà obtenue.

## Objectif

Étudier comment la diversification et l'allocation entre actifs peuvent influer sur le profil de rendement et de risque d'un portefeuille, en s'appuyant sur les notions de théorie moderne du portefeuille.

## Problématique

Comment comparer des allocations possibles et décrire leur compromis entre rendement attendu et risque, tout en tenant compte des hypothèses et de la période d'observation ?

## Méthodologie envisagée

1. Sélectionner des actifs et des séries de prix documentées, sous réserve de disponibilité et de droits d'utilisation.
2. Définir la période, la fréquence et les règles de traitement des données manquantes.
3. Calculer les rendements selon une convention explicitée et vérifier la qualité des séries.
4. Étudier la volatilité et les corrélations entre actifs.
5. Comparer des allocations définies à l'avance et, si les données le permettent, explorer une optimisation moyenne-variance.
6. Documenter les hypothèses, les limites des données historiques et les risques de biais ; ne pas interpréter les résultats passés comme une garantie de résultats futurs.

## Outils envisagés

Python, Pandas, NumPy et Matplotlib ; Excel pourra être utilisé pour des vérifications ou une présentation complémentaire. Les bibliothèques et sources retenues seront précisées lorsque le travail sera effectivement réalisé.

## Indicateurs prévus

Rendement moyen sur la période définie, volatilité, matrice de corrélation, poids des actifs, rendement et risque du portefeuille, ainsi qu'un ratio de Sharpe uniquement si ses hypothèses (notamment le taux sans risque et l'annualisation) sont explicitement définies.

## État d'avancement

Travail en préparation : les données, paramètres, calculs et résultats restent à établir et à vérifier.

[Retour à l'accueil](../../index.md) · [Présentation du portfolio](../../README.md)
