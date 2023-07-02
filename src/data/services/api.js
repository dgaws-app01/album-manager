import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = `https://script.google.com/macros/s/AKfycbz-sN9HyNIDWW0hPnaZlfZOFmsXF8M7y_4oq68iDucPDIVonUIbIws_7vu_x2t5zZE75g/exec`
const apiBaseQuery = fetchBaseQuery({baseUrl})

export default createAPI = (queries) => {
  
  let api = createApi({
    baseQuery : apiBaseQuery,
    endpoints : () => ({})
  })
  
  api.add = (qs) => {
    api.injectEndpoints({
      overrideExisting: false,
      endpoints : (builder) => {
        let endPoints = {}
        let apis = qs || {}
        Object.keys(apis).forEach(k=> {
          let {name, respH} = apis[k]
          if(!respH) respH = (r) => r.json()
  
          endPoints[k] = builder.mutation({
            query: ({ question }) => ({
              url: `${name || ""}`,            
              method: 'POST',
              body: question,
              responseHandler: respH,
              validateStatus: (response, result) => response.status === 200 && !result.isError,
              
            })
          })
        })
  
        return endPoints
      }
    })
  }

  api.add(queries)
  return api
}

