import * as React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

// Components
import Wrapper from '@components/Wrapper';
import Header from '@components/Header';

// Navigation
import {renderApp} from '@navigation/index';

// Styles
import styles from './styles';

interface Props {
  componentId: string;
}

const AddNewWallet: React.FC<Props> = props => {
  const {componentId} = props;

  const onPressAction = (type: 'import' | 'create') => (): void => {
    renderApp();
  };

  return (
    <Wrapper componentId={componentId}>
      <Header title="Add new wallet" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressAction('import')}>
            <Text>Import exists mnemonic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressAction('create')}>
            <Text>Create new mnemonic</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default AddNewWallet;
