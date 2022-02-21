const fs = require('fs');
const Handlebars = require("handlebars");
const config = require('./config.json');

const tempStr = fs.readFileSync("./sitemap_tmp.xml").toString();
const template = Handlebars.compile(tempStr);
const currDate = new Date();
const lastmod = currDate.toISOString().substring(0,10);

const items = config.urls.map(url => (
  {
    loc: url,
    lastmod,
  }
))

const text = template({items});

console.log(text)

