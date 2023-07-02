import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';

// Styles
import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = props => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
