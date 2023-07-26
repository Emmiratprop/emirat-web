import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'



const useQueryParams = () => {

    const [query, setQuery] = useState({})

    const { query:location} = useRouter()
    const { search } = location

    const onDecodeParams =  useCallback( async (params) => {

        const remplazarPrimerParametro = params.replace('?', '');

        const segundoParametro = remplazarPrimerParametro.split('&');

        const queryFinal = {}

        await segundoParametro.forEach( query => {
            const [key, value] = query.split('=')
            Object.assign(queryFinal, {
                 [key]: value
            })
        })

       setQuery(queryFinal)

   }, [] )


    useEffect(() => {

      if(search.trim()){
        onDecodeParams(search);
      }
    }, [ search, onDecodeParams ])

  return query
}

export default useQueryParams;