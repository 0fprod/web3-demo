import { Display } from '../Display/Display';
import { Log } from '../Log/Log';
import { PaperWrapper, StyledPaper } from './Screen.styled';

interface Props {
}

export const Screen: React.FC<Props> = () => {
    return <PaperWrapper>
        <StyledPaper variant='outlined'>
            <Display />
            <Log />
        </StyledPaper>
    </PaperWrapper>
}