import React from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "@/constants/theme";
import { Stack } from "expo-router";

const HomeScreen = () => {
    return ( 
        <SafeAreaView
            style ={{
                flex:1,
                backgroundColor: COLORS.lightWhite
            }}
        >
            <Stack.Screen options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () =>{
                    <ScreenHeaderBtn/>
                }
            }}>
                
            </Stack.Screen>
            
        </SafeAreaView>
    );
}
 
export default HomeScreen;