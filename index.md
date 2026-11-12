---
layout: default
title: Accueil
---
<section class="hero">
  <p class="kicker">Un livre de</p>
  <p class="auteur">Nelson Pereira</p>
  <h1>La vérité coûte que coûte</h1>
</section>

<!-- Résumé provisoire, rédigé d'après ta description du projet. À remplacer par ton propre texte. -->
« La vérité coûte que coûte » traite du relativisme, des sophismes, de l'hyper-subjectivité et de la foi catholique, dans le cadre de la pensée catholique traditionnelle thomiste.

Ce site présente le livre chapitre par chapitre et réunit les sources sur lesquelles il s'appuie.

<h2 id="chapitres">Chapitres</h2>

{% assign chapitres = site.pages | where_exp: "p", "p.path contains 'chapitres/'" | sort: "order" %}
{% if chapitres.size > 0 %}
<ol class="liste-chapitres">
  {% for c in chapitres %}
  <li><a href="{{ c.url | relative_url }}"><span class="num">{% if c.numero %}{{ c.numero }}{% else %}·{% endif %}</span>{{ c.title }}</a></li>
  {% endfor %}
</ol>
{% else %}
<p class="muted">Aucun chapitre n'est encore publié.</p>
{% endif %}

<h2>Sources</h2>

Les auteurs et les œuvres cités dans le livre sont réunis dans l'[index des sources]({{ '/sources/' | relative_url }}).
