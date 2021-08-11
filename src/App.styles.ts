import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  color: var(--primary-light);
  position: fixed;
  z-index: 100;
  right: 10px;
  top: 10px;
`;
