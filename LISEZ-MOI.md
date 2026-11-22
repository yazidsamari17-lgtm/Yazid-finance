# Galerie professionnelle

Pour ajouter une photo :

1. Déposez le fichier image dans `assets/galerie/` (JPG, JPEG, PNG, WEBP, GIF ou AVIF).
2. Ajoutez une entrée dans `galerie.json` en reprenant le modèle ci-dessous.

```json
{
  "photos": [
    {
      "fichier": "visite-seal-gestion.jpg",
      "titre": "Visite d'entreprise",
      "legende": "Découverte du cabinet SEAL-GESTION",
      "date": "Décembre 2026",
      "categorie": "Visite",
      "alt": "Description de la photo"
    }
  ]
}
```

Le champ `fichier` est obligatoire. Les autres champs sont facultatifs. Ne publiez des photos de personnes identifiables qu'avec leur accord.
