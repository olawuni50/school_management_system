import { combineReducers} from "redux";
import grades from "./grades"
import auth from './auth'

export default combineReducers({grades, auth})