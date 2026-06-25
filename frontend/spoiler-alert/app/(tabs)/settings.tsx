import { Text, TouchableOpacity, View } from 'react-native'
import { settingsPageStyles } from '../assets/styles/settings.style'

const Settings = () => {
  const styles = settingsPageStyles();
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style={styles.itemWrapper}>  
        <View style={styles.profileRow}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Username</Text>
            <Text style={styles.profileEmail}>address@email.com</Text>
            <TouchableOpacity style={styles.logoutButton}>
              <Text style={styles.logoutText}>LOG OUT</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionHeader}>THIS MONTH</Text>
          
          <View style={styles.statsRow}>
            <Text style={styles.statsLabelTricked}>TOTAL ITEMS TRASHED:</Text>
            <Text style={styles.trashedValue}>8</Text>
          </View>
          
          <View style={styles.statsRow}>
            <Text style={styles.statsLabelSaved}>TOTAL ITEMS SAVED:</Text>
            <Text style={styles.savedValue}>13</Text>
          </View>
        </View>

        {/* Menu Navigation Buttons */}
        <View style={styles.menuButtonStack}>
          <TouchableOpacity style={styles.pillButton}>
            <Text style={styles.pillButtonText}>SETTINGS</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.pillButton}>
            <Text style={styles.pillButtonText}>HOW TO USE APP</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.pillButton}>
            <Text style={styles.pillButtonText}>SUPPORT AND FAQ</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.pillButton, styles.donateButton]}>
            <Text style={[styles.pillButtonText, styles.donateButtonText]}>DONATE TO SUPPORT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Settings