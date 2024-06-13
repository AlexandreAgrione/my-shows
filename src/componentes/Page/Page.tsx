import Header from '@/componentes/Header'
import { Container } from '@mui/material'
import { Wrapper } from './Page.styles'
import { ReactNode } from 'react'

interface PageProps {
    children: ReactNode
}

function Page({ children }: PageProps) {
    return (
        <Wrapper>
            <Header />

            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'space-around',
                    paddingTop: '80px',
                    gap: '1rem',
                }}
            >
                {children}
            </Container>
        </Wrapper>
    )
}

export default Page
