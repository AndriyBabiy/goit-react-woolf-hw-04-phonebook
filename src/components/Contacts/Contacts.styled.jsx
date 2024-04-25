import styled from 'styled-components';

export const ContactsComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(4)};
`;

export const ContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  list-style: circle;
  list-style-position: inside;
`;

export const ContactsSearch = styled.div`
  align-items: start;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
`;

export const InputLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.large};
`;
