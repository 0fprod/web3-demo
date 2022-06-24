import { Card, SxProps } from "@mui/material"

interface Props {}

export const Log: React.FC = () => {
    const styles: SxProps = {
        backgroundColor: 'rgb(29, 95, 95)',
        padding: '1rem',
        color: 'rgb(237, 236, 237)',
        fontFamily: 'monospace'
    }
    return <Card sx={styles}> hello</Card>
}