import { Typography } from "@mui/material";
import { Wrapper } from "./Header.styles";

import LiveTvIcon from '@mui/icons-material/LiveTv';

function Header() {
    return (
        <Wrapper>
            <LiveTvIcon />
            <Typography component="h1" variant="h5" fontWeight={700} >My Tv Shows</Typography>
        </Wrapper>
    )
}

export default Header;