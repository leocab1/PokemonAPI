import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PokemonInfo } from '@/components/PokemonInfo'

const Index = () => {
  return (
    <View>
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