import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button/CustomButton';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Examples</Text>
      <Button
        onClick={() => navigation.navigate('Projects')}
        title="Go to projects"
        type="button"
      />
    </View>
  );
}

export default HomeScreen;