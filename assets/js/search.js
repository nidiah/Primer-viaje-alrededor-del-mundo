---

---
// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

// Create the lunr index for the search
var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

// Add to this index the proper metadata from the Jekyll content
{% assign count = 0 %}{% for text in site.pages %}
index.addDoc({
  title: {{text.title | jsonify}},
  author: {{text.author | jsonify}},
  layout: {{text.layout | jsonify}},
  content: {{text.content | jsonify | strip_html}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}

// Builds reference data (maybe not necessary for us, to check)
var store = [{% for text in site.pages %}{
  "title": {{text.title | jsonify}},
  "author": {{text.author | jsonify}},
  "layout": {{ text.layout | jsonify }},
  "link": {{text.url | jsonify}},
}
{% unless forloop.last %},{% endunless %}{% endfor %}]

// Query
var qd = {}; // Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = document.querySelector('#results');
  var query = document.querySelector('input#search').value;

  // The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.innerHTML = "";
  if (result.length == 0) {    
    resultdiv.append(document.createElement('p').innerHTML = 'No results found.');
  } else if (result.length == 1) {
    resultdiv.append(document.createElement('p').innerHTML = 'Found '+result.length+' result');
  } else {
    resultdiv.append(document.createElement('p').innerHTML = 'Found '+result.length+' results');
  }
  // Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    res = document.createElement('div')
    res.classList.add("result")
    link = document.createElement('a')
    link.setAttribute('href', '{{site.baseurl}}'+store[ref].link+'?q='+query)
    link.innerHTML = store[ref].title || 'Untitled page'
    p = document.createElement('p')
    p.appendChild(link)
    res.appendChild(p)
    resultdiv.appendChild(res)
  }
}

var callback = function(){
  searchInput = document.querySelector('input#search') 
  if (qd.q) {
    searchInput.value = qd.q[0];
    doSearch();
  }
  searchInput.addEventListener('keyup', doSearch);
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
