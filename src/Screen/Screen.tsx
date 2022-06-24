import { Paper, SxProps } from '@mui/material';
import React from 'react';
import { Log } from '../Log/Log';
import { PaperWrapper } from './Screen.styled';

interface Props {
}

export const Screen: React.FC<Props> = ({}) => {
    const paperStyles:SxProps = {
        width: '70%',
        height: '70%',
        margin: 'auto',
        padding: '2rem',
        backgroundColor:'rgba(58,178,193,.3)',
        display: 'flex',
        flexDirection: 'column'
    };
    return <PaperWrapper>
        <Paper variant='outlined' sx={paperStyles}> <Log/></Paper>
    </PaperWrapper>
}