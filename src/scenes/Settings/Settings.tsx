import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Components
import Wrapper from '@components/Wrapper';
import Header from '@components/Header';

// Styles
import styles from './styles';

interface Props {
  componentId: string;
}

const Settings: React.FC<Props> = props => {
  const {componentId} = props;

  return (
    <Wrapper componentId={componentId} withTabs activeTab="settings">
      <Header title="Settings" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Text>Settings</Text>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Settings;
