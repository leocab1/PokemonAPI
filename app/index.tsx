import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PokemonInfo } from '@/components/PokemonInfo'

const Index = () => {
  return (
    <View>
      <Text>index</Text>
      <PokemonInfo/>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})