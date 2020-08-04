import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import {saveData} from '../AsyncStorage'
import axios from 'axios'

export default function Home() {

  const [data, setData] = useState({});
  const [hasError, setErrors] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function fetchData() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Tampere&appid=2ccc32cc195c49726f1ee7f58a717fb6').then(resp => {
      setData(resp)
      console.log(resp.data);
  });
  }

  useEffect(() => {
    fetchData();
    console.log(data)
  }, [isLoading]);

  if(isLoading){
    return(
      <Text>Loading</Text>
     )
  } else {
    return (
      <View style={styles.container}>
        <Text>
          {data.name}
        </Text>
        <Image style={styles.image} source={{uri:"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"}}>
        </Image>
        <Text>
          {data.weather[0].description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100, 
  }
});
