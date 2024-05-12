/* eslint-disable import/no-extraneous-dependencies */
import cliHtml from 'cli-html';

import markdownit from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';
import markdownItIns from 'markdown-it-ins';
import markdownItMark from 'markdown-it-mark';
import markdownItDeflist from 'markdown-it-deflist';
import markdownItContainer from 'markdown-it-container';
import markdownItAbbr from 'markdown-it-abbr';
import markdownItSup from 'markdown-it-sup';
import markdownItSub from 'markdown-it-sub';
import markdownItTaskList from 'markdown-it-task-lists';
import { alert } from '@mdit/plugin-alert';

const md = markdownit({
  html: true,
  langPrefix: 'language-',
  linkify: true,
})
  .use(markdownItFootnote)
  .use(markdownItIns)
  .use(markdownItMark)
  .use(markdownItDeflist)
  .use(markdownItAbbr)
  .use(markdownItContainer)
  .use(markdownItSup)
  .use(markdownItSub)
  .use(markdownItTaskList)
  .use(alert, {
    deep: false,

    openRender(tokens, index, options, environment, self) {
      const token = tokens[index];

      let color = null;

      // Case token.markup in ['important', 'note', 'tip', 'warning', 'caution']
      switch (token?.markup) {
        case 'important': {
          color = 'red';

          break;
        }
        case 'note': {
          color = 'blue';

          break;
        }
        case 'tip': {
          color = 'green';

          break;
        }
        case 'warning': {
          color = 'yellow';

          break;
        }
        case 'caution': {
          color = 'yellow light';

          break;
        }
        default: {
          color = 'blue';
        }
      }

      return `<blockquote class="x-cli-color-${color}">`;
    },

    closeRender(tokens, index, options, environment, self) {
      return '</blockquote>';
    },
    titleRender: (tokens, index) => {
      const token = tokens[index];

      // console.log(token)

      let color = null;
      let icon = null;

      switch (token?.markup) {
        case 'important': {
          color = 'red';
          icon = '•';

          break;
        }
        case 'note': {
          color = 'blue';
          icon = '•';

          break;
        }
        case 'tip': {
          color = 'green';
          icon = '•';

          break;
        }
        case 'warning': {
          color = 'yellow';
          icon = '•';

          break;
        }
        case 'caution': {
          color = 'yellow light';
          icon = '•';

          break;
        }
        default: {
          color = 'blue';
          icon = '•';
        }
      }

      return `<p><span class="x-cli-color-${color}"> ${
        token.content[0].toUpperCase() + token.content.slice(1).toLowerCase()
      }</span></p>\n`;
    },
  });

md.renderer.rules.footnote_anchor = () => '';

const markdownToCli = (markdown) => cliHtml(md.render(markdown));

export default markdownToCli;
