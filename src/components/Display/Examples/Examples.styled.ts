import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledExamples = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-size: 1.25rem;
`;

export const StyledTextField = styled.input`
  height: 2rem;
  padding: 0.25rem;
`;

export const DonateBtn = styled(Button)`
  background-color: rgba(58, 178, 193, 0.3);
  color: black;
  border-radius: 0;
  box-shadow: none;
  &:hover {
    background-color: rgba(58, 250, 193, 0.4);
    box-shadow: none;
  }
`;
