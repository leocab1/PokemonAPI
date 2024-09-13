import { Avatar, Button, Text,  } from 'react-native-paper';
import { View } from 'react-native';

interface pokeProp {
    id: number,
    name: string,
    sprites: any
}

export function PokemonCard({ id, name, sprites }:pokeProp) {
  return (
    <>
    <View style={{
        flexDirection: "row",
        backgroundColor: "gray",
        flex: 5,
    }}>


    <View
    style={{ 
        flex: 3,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        }}
    
    >
    <Text style={{
        fontSize: 55,
        fontWeight: "bold",
        transform: [
            {rotate:'-90deg',

            }],
            textAlign: "center",
            flexShrink: 1,
        
    }}>#{ id }- { name }</Text>
    </View>
   



<View>
{
            sprites.map( (sprite: string, index:any ) => {
                return (
                    <Avatar.Image 
                        size={135} 
                        source={{ uri:sprite }} 
                    />
                )
            })
        }
</View>
    </View>


        
    </>
  )
}