import * as React from 'react';
import { Button, View } from 'react-native';

function Projects({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default Projects;
