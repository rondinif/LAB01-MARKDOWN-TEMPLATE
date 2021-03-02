# LAB01-MARKDOWN-TEMPLATE
simple exercise that shows how it is possible (and easy) to insert a part of *templating* into markdown.

In this test we use  ** Handlebars.js **, an extension to the Mustache templating language. 

## how to: 
``` sh
git clone https://github.com/rondinif/LAB01-MARKDOWN-TEMPLATE
cd LAB01-MARKDOWN-TEMPLATE
npm i
npm test
```
### outpput
``` html 
<h1>primo capitolo</h1>
<p>Questa seemplissima demo mostra come utilizzare <strong>handlebars</strong> insieme a <strong>markdown</strong>, ed ora possiamo dire:</p>
  <div>
    <span>Handlebars <b>rocks!</b> in markdown!</span>
  </div>
<h1>secondo capitolo</h1>
<p>se abbiamo un <a href="https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a> possiamo
dinaminamicamente creare un elenco puntato come questo:</p>
<ul class="people_list">
  <li>Yehuda Katz</li>
  <li>Alan Johnson</li>
  <li>Charles Jolley</li>
</ul>
```

### template/source/test 
see [test.js](./test.js)
