---
layout: page
title: Vocabularios
permalink: /vocabularios/
type: extras
---

Vocabularios nativos registrados por Pigafetta.

## Brasil

<table class="py-3">
  <tr><th>Español</th><th>Tamoio</th></tr>
	{% for row in site.data.vocab-sudamerica %}
	  {%  if row.Land == "Brasil" %}
        <tr><td>{{ row.Spa_gloss }}</td><td class="italic">{{ row.Word }}</td></tr>
      {% endif %}
  	{% endfor %}
</table> 	


## Patagonia

<table class="py-3">
  <tr><th>Español</th><th>Tehuelche</th></tr>
	{% for row in site.data.vocab-sudamerica %}
	  {%  if row.Land == "Patagonia" %}
        <tr><td>{{ row.Spa_gloss }}</td><td class="italic">{{ row.Word }}</td></tr>
      {% endif %}
  	{% endfor %}
</table> 