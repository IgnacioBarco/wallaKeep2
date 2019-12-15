import { FILTERS } from './filters'
import * as TYPE from './types'

const initialState = {
    adverts: [],
    filterByTag: FILTERS.ALL,
    filterByType: FILTERS.SELL,
}

export default function log(state = initialState, action) {
    switch (action.TYPE) {
        case TYPE.LOGIN:
            console.log('se ha logado');
            return { ...state, adverts:[1,2]};
        default:
            return state;
    }
}