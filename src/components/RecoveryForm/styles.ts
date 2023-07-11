import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 24,
  },
  row: {
    backgroundColor: '#FFFFFF',
    padding: 3,
    borderRadius: 16,
    marginHorizontal: -3,
  },
  rowActive: {
    backgroundColor: '#E9F5EE',
  },
  formRow: {
    backgroundColor: 'rgba(245, 245, 247, 0.5)',
    borderRadius: 16,
    borderWidth: 1,
    height: 140,
    borderColor: '#008E47',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  form: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  itemRow: {
    marginBottom: 4,
    paddingHorizontal: 2,
  },
  input: {
    width: 'auto',
    height: 32,
    paddingVertical: 0,
    marginLeft: 6,
    fontWeight: '500',
    fontSize: 17,
    letterSpacing: -0.05,
    color: '#1D1D22',
  },
  label: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: -0.05,
    color: '#1D1D22',
  },
  item: {
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    shadowColor: 'rgba(29, 29, 34, 0.04)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 5,
    alignItems: 'center',
  },
  itemPosition: {
    fontWeight: '500',
    fontSize: 13,
    letterSpacing: 0.3,
    color: '#B0B0BD',
  },
  itemValue: {
    marginHorizontal: 6,
    fontWeight: '500',
    fontSize: 13,
    letterSpacing: 0.3,
    color: '#1D1D22',
  },
  itemIconRow: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemIcon: {
    width: 9.3,
    height: 9.3,
    tintColor: '#D7D8DE',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#E9F5EE',
    marginTop: 8,
    marginHorizontal: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFocused: {
    backgroundColor: 'rgba(235, 235, 238, 0.7)',
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  buttonIconFocused: {
    width: 11.6,
    height: 11.6,
  },
})
