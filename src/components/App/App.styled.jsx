import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;

  padding-top: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(5)};
  font-size: 40px;
  color: #010101;
`;
