---
title: "Backtesting de stratégies de trading"
---

# Backtesting de stratégies de trading

**Statut : en préparation.** Aucun rendement simulé ni stratégie gagnante n'est revendiqué.

## Objectif

Apprendre à traduire des règles de stratégie en protocole de test historique reproductible et à évaluer les résultats simulés avec prudence.

## Problématique

Une stratégie définie par des règles explicites aurait-elle historiquement produit un profil de risque et de performance mesurable sur une période et un marché donnés, après prise en compte des coûts et des biais possibles ?

## Méthodologie envisagée

1. Définir précisément les règles d'entrée, de sortie, de dimensionnement et de gestion du risque avant le test.
2. Sélectionner un marché et des données historiques documentées ; les marchés évoqués à titre d'intérêt, tels que l'or ou le Bitcoin, ne sont pas encore confirmés comme périmètre d'étude.
3. Séparer, si les données le permettent, les phases de conception et d'évaluation afin de limiter le surajustement.
4. Modéliser les frais, le glissement, les délais d'exécution et les périodes sans position lorsque cela est possible.
5. Comparer le résultat à une référence clairement définie et effectuer des vérifications de sensibilité.
6. Exposer les limites d'un test historique : qualité des données, biais de survivance, biais d'anticipation et différence entre simulation et exécution réelle.

## Outils envisagés

Python, Pandas et une bibliothèque de backtesting telle que Backtesting.py, sous réserve de son adéquation au protocole retenu. Les versions, données et paramètres devront être consignés pour assurer la reproductibilité.

## Indicateurs prévus

Rendement cumulé et périodique, volatilité, baisse maximale, nombre de transactions, taux de transactions gagnantes, ratio gain/perte et ratio de Sharpe si les conventions sont définies. Les indicateurs seront interprétés avec les coûts et la période de test.

## État d'avancement

Travail en préparation : règles, marché, données et résultats sont à définir. Aucun résultat historique ne préjuge de performances futures.

[Retour à l'accueil]({{ '/' | relative_url }}) · [Présentation du portfolio]({{ '/README.html' | relative_url }})
