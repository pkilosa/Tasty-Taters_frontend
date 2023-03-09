import API from  '../../API'
import { fetchItemAction } from './action'

const api = new API()

export const fetchItem = params =>{
    return dispatch =>{
        return api.getItem(params).then(items=>{
            dispatch (fetchItemAction(items));
        }).catch(error=>{
            alert ('Failed to connect API:/items/')
        })
    }
}