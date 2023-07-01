import * as React from 'react';
import {View} from 'react-native';

// Styles
import styles from './styles';

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = props => {
  const {children} = props;

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Wrapper;
