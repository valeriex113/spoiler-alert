import { Text, View } from 'react-native';
import { homePageStyles } from '../assets/styles/home.style';
import AddItem from '../components/addItem';

const Home = () => {
  const styles = homePageStyles();
  return (
    <View style={styles.container}>
      <Text>Spoiler Alert!</Text>
      <View style={styles.addButton}>
        <AddItem />
      </View>

    </View>
  )
}

export default Home