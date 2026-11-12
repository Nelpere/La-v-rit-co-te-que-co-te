# La vérité coûte que coûte — site du livre

Site statique (Markdown + Jekyll) publié par GitHub Pages.

- **Site :** https://nelpere.github.io/la-v-rit-co-te-que-co-te/
- **Branche de travail et de publication :** `claude/test-saxg15`

## Structure

| Fichier ou dossier | Rôle |
|---|---|
| `index.md` | Page d'accueil : titre, résumé, liste des chapitres (générée automatiquement). |
| `chapitres/` | Un fichier `.md` par chapitre. |
| `sources/index.md` | Index des auteurs et des œuvres, avec la date de dernière actualisation. |
| `sources/auteurs/` | Une fiche `.md` par auteur (modèle : `_modele.md`). |
| `sources/videos/` | Transcriptions écrites des vidéos (modèle : `_modele.md`). |
| `_config.yml` | Configuration Jekyll (titre, adresse, `baseurl`). |
| `_layouts/` | Mises en page (`default`, `chapitre`, `page`). |
| `assets/` | Feuille de style et petit script (thème clair/sombre, table des matières). |

## Ajouter un chapitre

Crée un fichier dans `chapitres/` avec ce début :

```yaml
---
layout: chapitre
title: Titre du chapitre
numero: 1        # numéro affiché (facultatif)
order: 1         # ordre dans la liste et pour « précédent / suivant »
sources:         # liste affichée en bas de page
  - "Auteur, Œuvre, passage."
---
```

Puis écris le texte en Markdown. Les titres `##` et `###` forment la table des matières du chapitre.
La liste de l'accueil et la navigation « précédent / suivant » se mettent à jour toutes seules, d'après `order`.

## Ajouter un auteur ou une vidéo

Copie `sources/auteurs/_modele.md` (ou `sources/videos/_modele.md`) sous un nouveau nom sans le « _ » initial, puis remplis-le.
Les fichiers dont le nom commence par « _ » ne sont pas publiés.

## Liens internes

Dans le Markdown, écris les liens ainsi, pour qu'ils fonctionnent avec le `baseurl` du site :

```
[Introduction]({{ '/chapitres/introduction.html' | relative_url }})
```

## Publication

Chaque modification est poussée sur `claude/test-saxg15` ; GitHub Pages reconstruit le site en une à deux minutes
(onglet **Actions** ou **Settings → Pages** pour suivre la construction).
