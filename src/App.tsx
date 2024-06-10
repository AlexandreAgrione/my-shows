import "@fontsource/comfortaa/300.css";
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/500.css";
import "@fontsource/comfortaa/700.css";
import { CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import Page from "@/componentes/Page/index";
import Search from "@/componentes/Search";
import Shows from "@/componentes/Shows";

const theme = createTheme({
  typography: {
    fontFamily: 'Comfortaa'
  },
});

function App() {

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Typography>
          <Page>
            <Search />
            <Shows />
          </Page>
        </Typography>
      </ThemeProvider>
    </CssBaseline>
  )
}

export default App
