import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 500px;
  height: fit-content;
  padding: ${props => props.theme.spacing(4)};

  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(6)};

  border: 2px solid ${props => props.theme.colors.dark};
`;

export const FormElement = styled.div`
  align-items: start;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
`;

export const FormLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.large};
`;

export const FormSubmitButton = styled.button`
  width: fit-content;
  font-size: ${props => props.theme.fontSizes.medium};
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.spacing(1)};
`;
