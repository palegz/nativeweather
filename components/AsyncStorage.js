import AsyncStorage from '@react-native-community/async-storage'

export const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
      console.log('Data successfully saved')
    } catch (e) {
      console.log('Failed to save the data to the storage')
    }
  }

//Load function for data

export const readData = async (key) => {
    try {
      const userAge = await AsyncStorage.getItem(key)
      if (userAge !== null) {
        setAge(userAge)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }