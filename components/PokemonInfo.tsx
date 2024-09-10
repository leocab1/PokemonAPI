import {View,} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, Text } from 'react-native-paper'
import {useCounter} from '../hooks/useCounter'

 export const  PokemonInfo = () => {

    const [name, setName] = useState('');
    const [ide, setIde] = useState('');
    const [front, setFront] = useState('');


    const { counter, increment, decrement,  } = useCounter(1);

    const getPokemonInfo = async (id=1) =>{
        // agregar async llamadas asincronas
        const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
        // hacer un objeto
        const request = await fetch(url);
        const response = await request.json();
        setName(response.name); 
        setIde(response.id); 
        setFront(response.sprites.front_default);  
    }

    // numero estatico va counter
    useEffect( () =>{
      // llamado de getpokemonInfo
        getPokemonInfo(counter);
        // se debe ejecutar cada que useEffect cada que counter cambie su valor 
        // getPokemonInfo(counter) lo llama 
    }, [counter]);


  return (
    <View style={{
         flex:1,
         justifyContent: "center",
         alignItems: "center"
        }}
    >
      <Text>pokemoninfo</Text>
      <Text  variant="displayMedium"> {ide} - {name}</Text>
      <Avatar.Image size={200} source={{uri:front}}/>
      <View style={{flexDirection: "row-reverse"}}>
      <Button
       mode="contained"
       // aqui solo le pasamos uno dependiendo podriamos ir de uno en uno o de 5 en 5
       // o dos en dos 
       onPress={ (  ) => increment(1) } >
        siguiente
      </Button>
      <Button
       mode="contained"
       onPress={() => decrement(1)} >
        anterior
      </Button>
      </View>
    </View>
  )
}