import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: width - 20,
    height: 250,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 2,
  },
  viewTopCard: {
    height: 80,
    justifyContent: 'center',
  },
  directionTopCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInitials: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  wrapperTitles: {
    flex: 1,
    marginLeft: 5,
    height: 70,
    justifyContent: 'center',
  },
  nameCompany: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#666680',
  },
  textPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#617FD8',
  },
  termDays: {
    fontWeight: '600',
    fontSize: 14,
    color: '#A1A1B0',
  },
  viewInitials: {
    backgroundColor: '#7BC6D7',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  bgProgressBar: {
    height: 5,
    width: '100%',
    backgroundColor: '#A8C4EB',
    borderRadius: 10,
  },
  colorProgressBar: {
    height: 5,
    width: '50%',
    backgroundColor: '#627FD9',
    borderRadius: 10,
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  itemCard: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItem: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
