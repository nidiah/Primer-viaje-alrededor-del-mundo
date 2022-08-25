---
layout: page
title: Vocabularios
permalink: /vocabularios/
type: extras
featured-img: pages/fortanet-187.jpg
img-source: Fragmento de vocabulario patagón en edición de Walls y Merino (cortesía de Benson Latin American Collection, LLILAS Benson Latin American Studies and Collections, The University of Texas at Austin)
---

La obra de Pigafetta es un preciado testimonio para la historia de las lenguas nativas de América del Sur y el Sudeste asiático: atesora los primeros registros del tamoio, el techuelche, el antiguo cebuano y el malayo. Si bien el manuscrito original presenta las listas de palabras inmediatamente después de la descripción de cada uno de los pueblos correspondientes, en esta edición decidimos ponerlas en valor en esta sección especial que permite consultarlas de manera más accesible.

### Lenguas registradas

La conciencia de documentar las lenguas de los pueblos contactados se fue gestando durante la misma expedición y dependió de la posibilidad de establecer contactos pacíficos de cierta duración. Así, la experiencia hostil de las islas Marianas ([Matanza de Islas de los Ladrones]({{site.baseurl}}/relacion/pg_0021.html)) o la navegación acelerada por Tailandia ([Aves colosales y cosecha del ruibarbo]({{site.baseurl}}/relacion/pg_0081.html)) impidió tomar un registro lingüístico de esas zonas. 

En su paso por las costas de Río de Janeiro (ver [Particularidades de Brasil y sus habitantes]({{site.baseurl}}/relacion/pg_0006.html)), Pigafetta registró 12 palabras de lo que probablemente haya sido la lengua de los tamoios, pueblo hoy extinto perteneciente a la parcialidad tupinambá y hablante del tupí, lengua de la familia tupí-guaraní. En el breve vocabulario de este pueblo registrado por Pigafetta encontramos, en su mayoría, palabras relacionadas con el trueque.

Tras una estadía de seis meses en territorio patagónico y gracias a la colaboración de un nativo tehuelche tomado cautivo (ver [Descripción del estrecho y muerte del gigante Pablo]({{site.baseurl}}/relacion/pg_0018.html)), el autor logró componer un léxico para el tehuelche, lengua de la familia chona. Este vocabulario, mucho más extenso y más variado, reúne 83 términos que abarcan sustantivos referidos a descripción física, nombres de animales, colores, fenómenos climáticos, elementos de uso cotidiano y siete verbos.

Finalmente, en la etapa asiática de la expedición, Pigafetta elaboró listas de palabras de dos lenguas malayo polinesias: 160 palabras en el antiguo dialecto de Cebú (Filipinas) y casi 400 palabras de las Molucas. Gracias a las relaciones más fluidas y prolongadas con estas poblaciones (ver [Libro II y Libro III]({{site.baseurl}}/toc), respectivamente), pudo completar listas más exhaustivas en lo relativo a partes del cuerpo, bienes de intercambio y animales; y más abarcativas, al incluir dominios como la religión, términos de parentesco y de navegación, entre otros.

<div class="py-2"></div>
_La siguiente tabla muestra las palabras recogidas por Pigafetta en Brasil, la Patagonia, Filipinas y las islas Molucas junto con su glosa en español, ordenadas alfabéticamente._


  <table id="table_id" class="display table">
    <thead>
      <tr><th class="th-sm">Español</th><th class="th-sm">Brasil</th><th>Patagonia</th><th>Filipinas</th><th>Molucas</th></tr>
    </thead>
    <tbody>
    {% for row in site.data.vocab %}
        <tr><td>{{ row.Spa_gloss }}</td><td class="italic">{{ row.Brasil }}</td><td class="italic">{{ row.Patagonia }}</td><td class="italic">{{ row.Filipinas }}</td><td class="italic">{{ row.Molucas }}</td></tr>
      {% endfor %}
    </tbody>
  </table> 	



<script type="text/javascript">
$(document).ready( function () {
    $('#table_id').DataTable();
} );
</script>
