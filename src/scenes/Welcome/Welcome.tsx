import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Components
import Wrapper from '@components/Wrapper';
import Header from '@components/Header';
import Button from '@components/Button';

// Utils
import {push} from '@utils/navigation';

// Config
import * as scenes from '@config/scenes';

// Styles
import styles from './styles';

interface Props {
  componentId: string;
}

const Welcome: React.FC<Props> = props => {
  const {componentId} = props;

  const onNext = (): void => {
    push(componentId, scenes.ADD_NEW_WALLET);
  };

  return (
    <Wrapper componentId={componentId}>
      <Header title="Welcome" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Text>Welcome</Text>
        </ScrollView>
        <Button title="Next" onPress={onNext} />
      </View>
    </Wrapper>
  );
};

export default Welcome;
