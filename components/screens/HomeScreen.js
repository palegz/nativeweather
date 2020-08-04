import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Home() {

  const [data, setData] = useState({});
  const [hasError, setErrors] = useState(false);

  async function fetchData() {
    const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Tampere&appid=2ccc32cc195c49726f1ee7f58a717fb6');
    res
      .json()
      .then((res) => setData(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <View style={styles.container}>
      <Text>
        {data.visibility}
      </Text>
      <Text>
         HJELo
      </Text>
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
});
