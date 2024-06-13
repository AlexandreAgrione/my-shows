import '@fontsource/comfortaa/300.css'
import '@fontsource/comfortaa/400.css'
import '@fontsource/comfortaa/500.css'
import '@fontsource/comfortaa/700.css'
import {
    CssBaseline,
    ThemeProvider,
    Typography,
    createTheme,
} from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'

const theme = createTheme({
    typography: {
        fontFamily: 'Comfortaa',
    },
})

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
])

function App() {
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <Typography>
                        <RouterProvider router={router} />
                        {/* <Page>
              <Search />
              <Shows />
            </Page> */}
                    </Typography>
                </QueryClientProvider>
            </ThemeProvider>
        </CssBaseline>
    )
}

export default App
