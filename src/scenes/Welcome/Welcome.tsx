import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Components
import Wrapper from '@components/Wrapper';
import Header from '@components/Header';

// Styles
import styles from './styles';

interface Props {}

const Welcome: React.FC<Props> = props => {
  const {} = props;

  return (
    <Wrapper>
      <Header title="Welcome" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Text>Welcome</Text>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Welcome;
