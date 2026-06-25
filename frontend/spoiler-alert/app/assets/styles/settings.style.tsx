import { StyleSheet } from "react-native";

export const settingsPageStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', 
    paddingTop: 60, 
    paddingHorizontal: 16,
  },
  headerContainer: {
    marginBottom: 4,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  itemWrapper: {
    gap: 16,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 10,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#92addc', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    fontSize: 32,
  },
  profileDetails: {
    flex: 1,
    gap: 4,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2F3542',
    letterSpacing: 0.5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#747D8C',
    marginBottom: 4,
  },
  logoutButton: {
    backgroundColor: '#FFE3E3',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  logoutText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF4D4D',
  },
  statsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '700',
    color: '#747D8C',
    letterSpacing: 1,
    marginBottom: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsLabelTricked: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B6B', 
  },
  statsLabelSaved: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2ED573', 
  },
  trashedValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FF6B6B',
  },
  savedValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2ED573',
  },

  menuButtonStack: {
    gap: 12,
  },
  pillButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E1E4E8', 
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  pillButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#57606F',
    letterSpacing: 0.5,
  },
  donateButton: {
    borderColor: '#ECCC68', 
  },
  donateButtonText: {
    color: '#B58D16',
  },
});