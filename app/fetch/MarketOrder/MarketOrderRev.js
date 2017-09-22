import { get } from '../get'

export function getRevData(page,status) {
   const result = get('/api/Market-order/'+page+'/'+status)
   return result
}

