const highlight = require('highlight.js/lib/highlight')

highlight.registerLanguage('php', require('highlight.js/lib/languages/php'))
highlight.registerLanguage('python', require('highlight.js/lib/languages/python'))
highlight.registerLanguage('css', require('highlight.js/lib/languages/css'))
highlight.registerLanguage('coffeescript', require('highlight.js/lib/languages/coffeescript'))
highlight.registerLanguage('reasonml', require('highlight.js/lib/languages/reasonml'))
highlight.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
highlight.registerLanguage('json', require('highlight.js/lib/languages/json'))
highlight.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
highlight.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
highlight.registerLanguage('django', require('highlight.js/lib/languages/django'))
highlight.registerLanguage('elm', require('highlight.js/lib/languages/elm'))
highlight.registerLanguage('htmlbars', require('highlight.js/lib/languages/htmlbars'))
highlight.registerLanguage('haml', require('highlight.js/lib/languages/haml'))
highlight.registerLanguage('handlebars', require('highlight.js/lib/languages/handlebars'))
highlight.registerLanguage('less', require('highlight.js/lib/languages/less'))
highlight.registerLanguage('scss', require('highlight.js/lib/languages/scss'))
highlight.registerLanguage('stylus', require('highlight.js/lib/languages/stylus'))
highlight.registerLanguage('twig', require('highlight.js/lib/languages/twig'))
highlight.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))
highlight.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))
highlight.registerLanguage('plaintext', require('highlight.js/lib/languages/plaintext'))

module.exports = highlight