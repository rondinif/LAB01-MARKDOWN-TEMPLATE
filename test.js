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
var markdownTemplate = `
# primo capitolo
Questa seemplissima demo mostra come utilizzare **handlebars** insieme a **markdown**, ed ora possiamo dire:  
  
\`\`\`    
Handlebars *{{doesWhat}}* in markdown!
\`\`\`    

# secondo capitolo
se abbiamo un [Array](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array) possiamo 
dinaminamicamente creare un elenco puntato come questo: 
  {{#each people}}
  - {{this}}
  {{/each}}
`;

let Handlebars = require("handlebars");
let renderMarkdown = Handlebars.compile(markdownTemplate);
let markdownView = renderMarkdown(data);
var htmlView = md.render(markdownView);
console.log(htmlView);


