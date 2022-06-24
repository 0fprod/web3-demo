import styled from "@emotion/styled";
import { Button, Card, SxProps } from "@mui/material"

const StyledButton = styled(Button)`
    background-color: rgb(218, 150, 128);
    border-radius: 0;
    box-shadow: none;
    &:hover {
        background-color: #c18272;
        box-shadow: none;
    }
`

export const Display: React.FC = ()=>{
    const styles:SxProps = {
        height: '48.5%',
        padding: '1rem',
        borderRadius: '0',
        boxShadow:'none'
    }

    return <Card sx={styles}>
        <StyledButton variant="contained">Connect</StyledButton>
    </Card>
}