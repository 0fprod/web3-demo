import styled from "@emotion/styled";
import { Button } from "@mui/material"
import { StyledDisplay } from "./Display.styled";
import { Form } from './Form/Form'

const StyledButton = styled(Button)`
    background-color: rgb(218, 150, 128);
    border-radius: 0;
    box-shadow: none;
    &:hover {
        background-color: #c18272;
        box-shadow: none;
    }
`

export const Display: React.FC = () => {
    return <StyledDisplay>
        {/* <StyledButton variant="contained">Connect</StyledButton> */}
        <Form />
    </StyledDisplay>
}