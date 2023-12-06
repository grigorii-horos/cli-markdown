import { marked } from 'marked';
import cliHtml from 'cli-html';
import extendedTables from 'marked-extended-tables';
import markedAlert from 'marked-alert';
import markedFootnote from 'marked-footnote';

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  sanitize: false,
  smartLists: true,
  xhtml: false,
  headerIds: false,
  mangle: false,
  breaks: false,
  gfm: true,
  smartypants: false,
  baseUrl: undefined,
  headerPrefix: '',
  langPrefix: 'language-',
  sanitizer: undefined,
  silent: false,
});

marked.use(extendedTables());
marked.use(markedAlert());
marked.use(markedFootnote());

const markdownToCli = (markdown) => cliHtml(marked(markdown));

export default markdownToCli;
