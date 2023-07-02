import * as React from 'react';
import {View, Text, ScrollView, ActivityIndicator, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Components
import Wrapper from '@components/Wrapper';
import Header from '@components/Header';

// Store
import {RootState, AppDispatch} from '../../store/index';
import {fetchUsers, selectAllUsers} from '../../store/users';

// Styles
import styles from './styles';

interface Props {
  componentId: string;
}

const Settings: React.FC<Props> = props => {
  const {componentId} = props;

  const dispatch = useDispatch<AppDispatch>();

  const {loading} = useSelector((state: RootState) => state.users);
  const users = useSelector(selectAllUsers);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Wrapper componentId={componentId} withTabs activeTab="settings">
      <Header title="Settings" />
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
            <Button title={'Reload'} onPress={() => dispatch(fetchUsers())} />
            {users?.map(user => {
              return (
                <View style={styles.container} key={user.id}>
                  <View>
                    <View>
                      <Text>
                        {user.first_name} {user.last_name}
                      </Text>
                    </View>
                    <View>
                      <Text>{user.email}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </Wrapper>
  );
};

export default Settings;
