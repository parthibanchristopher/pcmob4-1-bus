import React, { useState } from "react";		
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>		
      <Text style={styles.title}>Bus arrival time:</Text>		
      <Text style={styles.arrivalTime}>
          {loading ? "loading" : "loaded"}
      </Text>		
      <TouchableOpacity style={styles.button} onPress={() => setLoading(false)}>		
        <Text style={styles.buttonText}>Refresh</Text>		
      </TouchableOpacity>		
    </View>		
  );
}

const styles = StyleSheet.create({		
  container: {		
    flex: 1,		
    backgroundColor: "#fff",		
    alignItems: "center",		
    justifyContent: "center",		
  },		
  title: {		
    fontSize: 50,		
    marginVertical: 20,		
  },		
  arrivalTime: {		
    fontSize: 40,		
  },		
  button: {		
    backgroundColor: "lightblue",		
    padding: 20,		
    marginVertical: 20,		
  },		
  buttonText: { fontSize: 20 },		
});		
