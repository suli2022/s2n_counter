import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [countnum,setCountnum] = useState(0);
  function increment() {
    let actualCount = countnum;
    let newCount = ++actualCount;
    setCountnum(newCount);
    console.log(newCount)
  }
  function resetCounter() {
    setCountnum(0);
  }
  function showAbout() {
    alert('Névjegy', 'Nagy János, Szoft II N, 2023-02-27');
    console.log('itt jó')
  }
  return (
    <View style={styles.container}>
      <Button title='Névjegy'
      onPress={showAbout}/>
      <Button title='Alap'
      onPress={resetCounter} />

      <Text style={styles.title}>Számláló</Text>
      <Text>{countnum}</Text>
      
      <TouchableHighlight
      style={styles.counterButton}
      onPress={increment}>
        <Text>Számol</Text>
      </TouchableHighlight> 
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButton: {
    backgroundColor: 'lightblue',
    padding: 8,
    width: '80%',
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 3
  },
  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 150
  }
});
