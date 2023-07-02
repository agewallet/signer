import * as React from 'react';
import {View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

// Components
import BottomTabs from '@components/BottomTabs';

// Styles
import styles from './styles';

interface Props {
  children: React.ReactNode;
  componentId: string;
  withTabs?: boolean;
  activeTab?: string;
}

const Wrapper: React.FC<Props> = props => {
  const {children, componentId, withTabs, activeTab} = props;

  const {isConnected, type} = useNetInfo();

  if (isConnected || type !== 'none') {
    // Block app use
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      {withTabs && activeTab ? (
        <BottomTabs componentId={componentId} activeTab={activeTab} />
      ) : null}
    </View>
  );
};

export default Wrapper;
