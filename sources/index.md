---
layout: page
title: Sources
---
**Dernière actualisation de la base de sources : 12 novembre 2026, 22 h 33.**

Cette page réunit les auteurs et les œuvres sur lesquels s'appuie le livre. Chaque chapitre cite en bas de page les sources de ses affirmations.

## Auteurs

{% assign auteurs = site.pages | where_exp: "p", "p.path contains 'sources/auteurs/'" | sort: "title" %}
{% if auteurs.size > 0 %}
<ul>
  {% for a in auteurs %}<li><a href="{{ a.url | relative_url }}">{{ a.title }}</a></li>
  {% endfor %}
</ul>
{% else %}
Aucun auteur n'est encore enregistré.
{% endif %}

## Vidéos (transcriptions)

{% assign videos = site.pages | where_exp: "p", "p.path contains 'sources/videos/'" | sort: "title" %}
{% if videos.size > 0 %}
<ul>
  {% for v in videos %}<li><a href="{{ v.url | relative_url }}">{{ v.title }}</a></li>
  {% endfor %}
</ul>
{% else %}
Aucune transcription n'est encore enregistrée.
{% endif %}

## Nouveautés des auteurs de la liste

Aucun auteur n'est encore dans la liste : il n'y a donc aucune nouveauté à signaler. À chaque actualisation de cette base, la date, l'heure et la minute ci-dessus sont mises à jour, et les nouveaux contenus des auteurs de la liste sont signalés ici.
