import {types} from './constants'

export const increment = ({dispatch}) => dispatch(types.INCREMENT)
export const decrement = ({dispatch}) => dispatch(types.DECREMENT)
