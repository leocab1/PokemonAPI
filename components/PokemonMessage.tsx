import { StyleSheet, Text, View  } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const PokemonMessage = () => {
    return (
        <View>
            <Text>Cargando....</Text>
            <ActivityIndicator size={20} color="#0000ff" />
        </View>
    )
}