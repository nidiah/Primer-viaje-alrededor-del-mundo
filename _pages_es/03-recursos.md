---
layout: page
title: Recursos
permalink: /recursos/
type: extras
---


<!-- Recursos -->
<div class="container mx-auto px-2">
	<!-- <div class="border-top-thick">  Linea larga 
	<div class="col-1 sm-width-full border-top-thick"> </div> Linea corta -->

  {% for post in site.recursos %}
    {% include post_block.html %}
  {% endfor %}

</div><!-- End Recursos -->