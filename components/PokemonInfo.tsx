import { ImageBackground, View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { PokemonCard } from './PokemonCard';
import { PokemonMessage } from './PokemonMessage';

export const PokemonInfo = () => {

    const { counter, increment, decrement } = useCounter();
    const { data, isLoading, hasError } = useFetch( 'https://pokeapi.co/api/v2/pokemon/' + counter );


    

    return (
        <ImageBackground
            style={{ 
                flex:1, 
                justifyContent:"center",
                 alignItems:"center" 
            }}
           source={{
            uri: 'https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/go/pokemon-party.jpg'
           }}
            resizeMode="cover"
        >


          {
            isLoading 
            ?<PokemonMessage/>
            : <PokemonCard
            id={ data?.id }
            name={ data?.name }
            sprites={[
                data?.sprites.back_default,
                data?.sprites.front_default,
                data?.sprites.back_shiny,
                data?.sprites.front_shiny,
            ]}
        />
          }

            <View
             style={{ 
              width: "100%",
              marginVertical: 15,
              justifyContent: "space-evenly",
              flexDirection: "row-reverse"
            }}
            >

                <Button 
                    mode="contained"
                    onPress={ () => increment(1) }
                    icon="arrow-right"
                    style= {{
                      backgroundColor: "darkblue"
                    }}
                    contentStyle= {{
                      flexDirection: "row-reverse"
                    }}
                >
                    Siguiente
                </Button>
                <Button 
                    mode="contained"
                    onPress={ () => decrement(1) }
                    icon="arrow-left"
                    style= {{
                      backgroundColor: "darkblue"
                    }}

                >
                    Anterior
                </Button>
            </View>
        </ImageBackground>
    )
}