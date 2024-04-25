import {
  HeadingL,
  HeadingM,
  HeadingS,
  HeadingXL,
} from './ComponentHeading.styled';

export const ComponentHeading = ({ size = 'large', text }) => {
  switch (size) {
    case 'xlarge':
      return <HeadingXL>{text}</HeadingXL>;
    case 'large':
      return <HeadingL>{text}</HeadingL>;
    case 'medium':
      return <HeadingM>{text}</HeadingM>;
    case 'small':
      return <HeadingS>{text}</HeadingS>;
    default:
      return <HeadingL>{text}</HeadingL>;
  }
};
