//var mymodule = require('./mymodule');
//mymodule.sayHello();
//mymodule.sayGoodbye();

var markdown = require('markdown').markdown;

console.log(markdown.toHTML('A paragraph in **markdown**!'));