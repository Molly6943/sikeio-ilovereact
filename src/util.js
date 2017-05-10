import { markdown as $markdown } from 'markdown'

// const $db = {
//   get: (key) => {
//     let value = window.localStorage.getItem(key)
//     try {
//       return JSON.parse(value);
//     } catch (err) {
//       return value;
//     }
//   },
//   set: (key, value) => {
//     if (typeof value === 'object'){
//       value = JSON.stringify(value)
//     }
//     window.localStorage.setItem(key, value)
//   },
//   del: (key) => {
//     window.localStorage.removeItem(key)
//   }
// }
// const $uid = {
//   generate: () => Date.now()
// }
const $md2html = (md) => ({ __html: $markdown.toHTML(md) })
const PATH = 'http://localhost:8081/'
const $jsonPostBody = (object) => JSON.stringify(object).replace(/\"|{|}/g, '').replace(/\:/g, '=').replace(/\,/g, '&&')
export {
  $db,
  $uid,
  $markdown,
  $md2html,
  PATH,
  $jsonPostBody
}
