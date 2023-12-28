import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, SIZES } from "./constants/theme";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "./components/common/header/screenHeaderBtn";
import icons from "./constants/icons";
import React from "react";
import HomeView from "./components/home/home-screen/homeView";

export default function App() {
  return (

    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite
      }}
    >
      <Stack.Screen options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={icons.location} dimension="60%" />
        ),
        headerTitle: ""
      }}>

      </Stack.Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flex: 1,
          padding: SIZES.medium
        }}>
          <HomeView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
