import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    </ScrollView>
  );
}

export default Home;