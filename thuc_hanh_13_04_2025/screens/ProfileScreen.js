import React,{useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AuthProvider, AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {
  
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const navigation = useNavigation();
const { isLoggedIn, isLoading } = useContext(AuthContext);
const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    logout();
    navigation.replace('Login'); // Reset navigation after logout
  };


  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View
        style={{
          backgroundColor: '#fbfccc',
          height: '20%',
          position: 'relative',
          top: '-10%',
          marginBottom: '-30%',
          borderEndEndRadius: 50,
          borderBottomLeftRadius: 50,
        }}
      ></View>
      <View style={styles.header}>
        <View style={{ flexDirection: 'column', alignItems: 'center', position: 'relative', top: -80 }}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPq_GdHrAfGdnr3cLDeagSc7X_twjR_6Cz9Q&s',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Rakibul Hasan</Text>
          <Text style={styles.email}>rakibbrand@gmail.com</Text>
        </View>
      </View>

      {/* Options */}
      <View style={{ padding: 20, marginBottom: 200 }}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>My Card</Text>
        </TouchableOpacity>
        <View style={[styles.option, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <Text style={styles.optionText}>Dark Mood</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: '#767577', true: '#6C63FF' }}
            thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
          />
        </View>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Track Your Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option1} onPress={handleLogout}>
          <Text style={[styles.optionText, { color: 'white', textAlign: 'center' }]} >
            Log Out
          </Text>
          <Icon name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },
  header: {
    alignItems: 'center',
    marginBottom: -73,
    backgroundColor: '#fbfccc',
    marginTop: 80,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  profileImage: { width: 120, height: 120, borderRadius: 40, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold' },
  email: { fontSize: 16, color: '#888' },
  option: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  optionText: { fontSize: 16, margin: 10 },
  option1: {
    backgroundColor: '#4b44ec',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
  },
});

export default ProfileScreen;
