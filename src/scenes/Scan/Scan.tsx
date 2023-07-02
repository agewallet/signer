import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Components
import Wrapper from '@components/Wrapper';
import Header from '@components/Header';
import Button from '@components/Button';

// Store
import {RootState} from '../../store/index';
import {setMessage} from '../../store/message';

// Styles
import styles from './styles';

interface Props {
  componentId: string;
}

const Scan: React.FC<Props> = props => {
  const {componentId} = props;

  const dispatch = useDispatch();
  const {message} = useSelector((state: RootState) => state.message);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  return (
    <Wrapper componentId={componentId} withTabs activeTab="scan">
      <Header title="Scan" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Text>Scan</Text>
          <Text style={{}}>{message}</Text>
          <Button title={'Set Message'} onPress={handlePress} />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Scan;
