const marked = require('marked');
const cliHtml = require('cli-html');

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight(code) {
    return require('highlight.js').highlightAuto(code).value;
  },
  pedantic: false,
  sanitize: false,
  smartLists: true,
  xhtml: false,
  emoji: true,
  breaks: false,
  gfm: true,
  smartypants: false,
  baseUrl: null,
  headerIds: true,
  headerPrefix: '',
  langPrefix: 'language-',
  mangle: true,
  sanitizer: null,
  silent: false,
});

const markdownToCli = (markdown) => cliHtml(marked(markdown));

module.exports = markdownToCli;
