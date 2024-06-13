import { getShows } from '@/api'
import Page from '@/componentes/Page'
import Search from '@/componentes/Search'
import Shows from '@/componentes/Shows'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

function Home() {
    const [search, setSearch] = useState('planet')
    const { data, isFetching } = useQuery({
        queryKey: ['shows', { search }],
        queryFn: async () => {
            const data = await getShows(search)
            return data
        },
    })

    return (
        <Page>
            <Search setSearch={setSearch} />
            <Shows shows={data} isLoading={isFetching} />
        </Page>
    )
}

export default Home
