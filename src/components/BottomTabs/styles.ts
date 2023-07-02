import {StyleSheet} from 'react-native';

// Utils
import isIphoneX from '@utils/isIphoneX';

// Config
import {IS_IOS} from '@config/platform';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: isIphoneX() ? 84 : 50,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: IS_IOS ? 1 : 0,
    borderTopColor: '#EBEBEE',
    zIndex: 4,
  },
  button: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: '#9CACA8',
  },
  activeIcon: {
    backgroundColor: '#111611',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EBEBEE',
  },
  title: {
    marginTop: 2,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.38,
    color: '#9CACA8',
  },
  activeTitle: {
    color: '#111611',
  },
});
