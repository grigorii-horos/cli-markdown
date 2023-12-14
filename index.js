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
    deep: true,
  });

md.renderer.rules.footnote_anchor = () => '';

const markdownToCli = (markdown) => cliHtml(md.render(markdown));

export default markdownToCli;
