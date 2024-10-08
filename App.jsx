import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const App = () => {

  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <View className='flex-1 justify-center items-center dark:bg-slate-800'>
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      
      <TouchableOpacity className='bg-yellow-500 px-10 py-5 rounded-full'>
        <Text className='text-xl'>Click Me!</Text>
      </TouchableOpacity>
      
      <Text className='text-2xl my-12'>Hello World!</Text>
    </View>
  )
}

export default App
