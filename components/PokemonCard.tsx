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
        flex: 1
    }}>


    <View
    style={{ 
        flex: 3,
        backgroundColor: "red"
        }}
    
    >
    <Text style={{
        fontSize: 50,
        fontWeight: "bold",
        transform: [
            {rotate:'-90deg'

            }],
        
    }}>#{ id }- { name }</Text>
    </View>
   



<View>
{
            sprites.map( (sprite: string, index:any ) => {
                return (
                    <Avatar.Image 
                        size={100} 
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