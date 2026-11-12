/* JavaScript minimal : bascule clair/sombre et table des matières du chapitre. */
(function () {
  'use strict';

  // --- Thème clair / sombre -------------------------------------------------
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // --- Table des matières (h2 / h3 du contenu) -------------------------------
  var contenu = document.getElementById('contenu');
  var toc = document.getElementById('toc');
  var list = document.getElementById('toc-list');
  if (!contenu || !toc || !list) return;

  var titres = contenu.querySelectorAll('h2, h3');
  if (titres.length < 2) return;

  var ol = list, sub = null, lastLi = null;
  Array.prototype.forEach.call(titres, function (h, i) {
    if (!h.id) h.id = 'section-' + (i + 1);
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    if (h.tagName === 'H3' && lastLi) {
      if (!sub) { sub = document.createElement('ol'); lastLi.appendChild(sub); }
      sub.appendChild(li);
    } else {
      sub = null;
      ol.appendChild(li);
      lastLi = li;
    }
  });
  toc.hidden = false;
})();
