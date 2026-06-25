import { FlatList, Text, View } from 'react-native';
import { homePageStyles } from '../assets/styles/home.style';
import AddItem from '../components/addItem';
import TodaysDate from '../components/todaysDate';
import AddPhoto from '../components/addPhoto';

const testingData = [
  { name: 'Food Name 1', category: 'Fruits and Vegetables', date: '1/05/2026'},
  { name: 'Food Name 2', category: 'Meat and Dairy', date: '1/05/2026'},
  { name: 'Food Name 3', category: 'Others', date: '1/05/2026'},
  { name: 'Food Name 4', category: 'Fruits and Vegetables', date: '1/05/2026'},
];


const Home = () => {
  const styles = homePageStyles();
  return (
    <View style={styles.container}>
      <View style={styles.welcomeMsg}>
        <Text style={styles.welcomeMsgText}>Welcome back, Username!</Text>
      </View>

      <View style={styles.dateContainer}>
        <TodaysDate />
      </View>
      
      {/* Expired Items */}
      <View style={styles.itemWrapper}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemHeader}>Expired Items</Text>
          <View style={[styles.itemContentContainer, styles.expiryItemWrapper]}>
            <FlatList 
              style={{flex: 1}}
              data={testingData}
              renderItem={({ item }) => (
                <View style={styles.itemText}>
                  <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                  <Text>{item.category}</Text>
                  <Text>{item.date}</Text>
                </View>
              )}
              keyExtractor={item => item.name}
              nestedScrollEnabled
              horizontal/>
          </View>
        </View>

        {/* Near Expiry Items */}
        <View style={styles.itemContainer}>
          <Text style={styles.itemHeader}>Near Expiry Items</Text>
          <View style={[styles.itemContentContainer, styles.nearExpiryItemWrapper]}>
            <FlatList 
              style={{flex: 1}}
              data={testingData}
              renderItem={({ item }) => (
                <View style={styles.itemText}>
                  <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                  <Text>{item.category}</Text>
                  <Text>{item.date}</Text>
                </View>
              )}
              keyExtractor={item => item.name}
              nestedScrollEnabled
              horizontal/>
          </View>
        </View>

        {/* Safe Items */}
        <View style={styles.itemContainer}>
          <Text style={styles.itemHeader}>Safe Items</Text>
          <View style={[styles.itemContentContainer, styles.safeItemWrapper]}>
            <FlatList 
              style={{flex: 1}}
              data={testingData}
              renderItem={({ item }) => (
                <View style={styles.itemText}>
                  <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                  <Text>{item.category}</Text>
                  <Text>{item.date}</Text>
                </View>
              )}
              keyExtractor={item => item.name}
              nestedScrollEnabled
              horizontal/>
          </View>
        </View>
      </View>
      
      {/* Buttons */}
      <View style={styles.bottomButtonWrapper}>
        {/* Add Item */}
        <View style={styles.bottomButton}>
          <AddItem />
        </View>

        {/* Add Photo */}
        <View style={styles.bottomButton}>
          <AddPhoto />
        </View>
      </View>

    </View>
  )
}

export default Home