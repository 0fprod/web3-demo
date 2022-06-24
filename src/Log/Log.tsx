import { Card, SxProps } from "@mui/material"

interface Props {}

export const Log: React.FC = () => {
    const styles: SxProps = {
        height: '50%',
        padding: '1rem',
        backgroundColor: 'rgb(29, 95, 95)',
        color: 'rgb(237, 236, 237)',
        fontFamily: 'monospace',
        overflowX: 'hidden',
        overflowY: 'auto',
        borderRadius: '0'
    }
    return <Card sx={styles}>  Dolor Lorem aliquip non tempor consectetur ut nisi officia cillum velit.</Card>
}