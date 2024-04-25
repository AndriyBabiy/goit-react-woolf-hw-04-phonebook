import styled from 'styled-components';

export const ContactDetails = styled.li`
  display: flex;
  align-items: baseline;
  gap: ${props => props.theme.spacing(2)};
`;

export const ContactText = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const DeleteButton = styled.button`
  width: fit-content;
  font-size: ${props => props.theme.fontSizes.small};
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(1)};
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.spacing(1)};
`;
