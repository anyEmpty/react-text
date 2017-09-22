import { get } from '../get'

export function getData(status,page) {
   const result = get('/api/openscene/'+status+'/'+page)
   return result
}

