var md = require('markdown-it')({
    html: true,
    linkify: true,
    xhtmlOut: true
});

// carico i dati
// let data = myData.json 
let data = {
    doesWhat: 'rocks!', 
    people: [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley"
      ]
};
// carico la template markdown + handlebars
// const markdownText = fs.readFileSync(path.resolve(__dirname, 'myMarkDownemplateWithHandlebars.md')).toString('utf8')
var markdownText = `
# primo capitolo
Questa seemplissima demo mostra come utilizzare **handlebars** insieme a **markdown**, ed ora possiamo dire:  
  <div>
    <span>Handlebars <b>{{doesWhat}}</b> in markdown!</span>
  </div>

# secondo capitolo
se abbiamo un [Array](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array) possiamo 
dinaminamicamente creare un elenco puntato come questo: 
<ul class="people_list">
  {{#each people}}
  <li>{{this}}</li>
  {{/each}}
</ul>
`;
var template = md.render(markdownText);
let Handlebars = require("handlebars");


let render = Handlebars.compile(template);
let view = render(data);
console.log(view);


