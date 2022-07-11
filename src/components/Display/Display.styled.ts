import { Button, Card, styled } from "@mui/material";

export const StyledDisplay = styled(Card)`
    height: 48.5%;
    padding: 1rem;
    border-radius: 0;
    box-shadow:none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledButton = styled(Button)`
    background-color: rgb(218, 150, 128);
    border-radius: 0;
    box-shadow: none;
    &:hover {
        background-color: #c18272;
        box-shadow: none;
    }
`