import { marked } from "marked";
import cliHtml from "cli-html";
import emoji from "node-emoji";

function insertEmojis(text) {
  return text.replace(/:([A-Za-z0-9_\-\+]+?):/g, function (emojiString) {
    var emojiSign = emoji.get(emojiString);
    if (!emojiSign) return emojiString;
    return emojiSign + " ";
  });
}

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
  headerPrefix: "",
  langPrefix: "language-",
  mangle: true,
  sanitizer: undefined,
  silent: false,
});

const markdownToCli = (markdown) => cliHtml(marked(insertEmojis(markdown)));

export default markdownToCli;
