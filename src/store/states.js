import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE, ADD_COMMENT, BOMB_BOX } from './types'
import { $uid } from '../util'

export default function articles (state = [], action){
  console.log(action)
  switch (action.type) {
    case ADD_ARTICLE:
      return [
        {
          ...action.article,
          id: $uid.generate(),
          updatedAt: Date.now(),
          createdAt: Date.now(),
          comments: []
        },
        ...state
      ]
    case DELETE_ARTICLE:
      return state.filter((article) => article.id !== action.id)
    case EDIT_ARTICLE:
      return state.map(
        (article) => (
          article.id === action.id ?
          { ...article, ...action.article, updatedAt: Date.now() } :
          article
        )
      )
    case ADD_COMMENT:
      return state.map(
        (article) => {
          if (Number(article.id) === Number(action.articleId)) {
            article.comments.unshift({ ...action.comment, createdAt: Date.now() })
          }
          return article
        }
      )
    default:
      return state
  }
}
