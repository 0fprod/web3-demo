import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const PaperWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
`

export const StyledPaper = styled(Paper)`
    width: 70%;
    height: 70%;
    margin: auto;
    padding: 2rem;
    background-color:rgba(58,178,193,.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
