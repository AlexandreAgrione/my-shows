import { Button } from "@mui/material";
import { SearchInput, SearchSection } from "./Search.styles";
import { Search as SearchIcon, TvOutlined } from '@mui/icons-material'

function Search() {
    return (
        <form style={{ width: '100%' }}>
            <SearchSection>
                <SearchInput 
                    name="search" 
                    placeholder="Pesquise suas séries..." 
                    fullWidth 
                    startAdornment={<SearchIcon />} 
                    autoComplete="off"
                />
                <Button type='submit' endIcon={<TvOutlined/>}>
                    Buscar
                </Button>
            </SearchSection>
        </form>
    )
}

export default Search;