
import { get } from '../get'

export function getData(typeStatus,tabStatus,page) {
   const result = get('/api/scene/'+typeStatus+'/'+tabStatus+'/'+page)
   return result
}