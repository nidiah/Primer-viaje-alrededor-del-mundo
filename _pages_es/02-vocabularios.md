---
layout: page
title: Vocabularios
permalink: /vocabularios/
type: extras
---

Vocabularios nativos registrados por Pigafetta.

## Brasil

En su paso por las costas de Río de Janeiro, Pigafetta registró 12 palabras en Tupí, lengua de la familia tupí-guaraní hablada en ese entonces por los tamoios, pueblo de la parcialidad tupinambá. Se trata, en su mayoría, de palabras relacionadas con el trueque.

<div class="py-3 table-wrapper-scroll-y my-custom-scrollbar">
  <table class="table">
    <thead>
      <tr><th class="th-sm">Español</th><th class="th-sm">Tupí</th></tr>
    </thead>
    {% for row in site.data.vocab-sudamerica %}
      {%  if row.Land == "Brasil" %}
          <tr><td>{{ row.Spa_gloss }}</td><td class="italic">{{ row.Word }}</td></tr>
        {% endif %}
      {% endfor %}
  </table> 	
</div>

## Patagonia

Gracias a la colaboración de un tehuelche tomado cautivo (ver [Descripción del estrecho y muerte del gigante Pablo]({{site.baseurl}}/relacion/pg_0018.html)), el autor logró reunir una lista de 83 términos de la lengua tehuelche que abarcan sustantivos referidos a descripción física, nombres de animales, colores, fenómenos climáticos, elementos de uso cotidiano y siete verbos.

<div class="py-3 table-wrapper-scroll-y my-custom-scrollbar">
  <table class="table">
    <tr><th>Español</th><th>Tehuelche</th></tr>
  	{% for row in site.data.vocab-sudamerica %}
  	  {%  if row.Land == "Patagonia" %}
          <tr><td>{{ row.Spa_gloss }}</td><td class="italic">{{ row.Word }}</td></tr>
        {% endif %}
    	{% endfor %}
  </table> 
</div>