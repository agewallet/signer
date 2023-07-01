import * as React from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

// Styles
import styles from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = props => {
  const {title} = props;

  const [barHeight, setBarHeight] = React.useState<number>(0);

  React.useEffect(() => {
    onGetConstants();
  }, []);

  const onGetConstants = async (): Promise<void> => {
    setBarHeight((await Navigation.constants()).statusBarHeight);
  };

  return (
    <View style={[styles.container, {paddingTop: barHeight}]}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
