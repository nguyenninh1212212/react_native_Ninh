// screens/InboxScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      <Text>No messages yet.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});

export default InboxScreen;