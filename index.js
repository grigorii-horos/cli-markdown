import { marked } from 'marked';
import cliHtml from "cli-html";
import extendedTables from 'marked-extended-tables';

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  sanitize: false,
  smartLists: true,
  xhtml: false,
  breaks: false,
  gfm: true,
  smartypants: false,
  baseUrl: undefined,
  headerIds: true,
  headerPrefix: '',
  langPrefix: 'language-',
  mangle: true,
  sanitizer: undefined,
  silent: false,
});

marked.use(extendedTables());

const markdownToCli = (markdown) => cliHtml(marked(markdown));

export default markdownToCli;
