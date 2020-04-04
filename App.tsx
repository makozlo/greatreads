import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Greatreads</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
