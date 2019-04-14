import { combineReducers } from 'redux'
import companies from './reducers/companies'
import updates from './reducers/updates'
import common from './reducers/common'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  companies,
  updates,
  common,
  router: routerReducer
})
