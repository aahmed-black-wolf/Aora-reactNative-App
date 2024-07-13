import React from "react";

import { Tabs } from "expo-router";
import { Image, View } from "react-native";

import icons from "@/constants/icons";

const TabIcon = ({ icon, color, name, focused }: any) => (
  <View className="items-center justify-center gap-2">
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
    />
  </View>
);

const TapsLayout = () => {
  const listOfTaps = [
    { title: "Home", icon: icons.home },
    { title: "Bookmark", icon: icons.bookmark },
    { title: "Create", icon: icons.upload },
    { title: "Profile", icon: icons.profile },
  ];
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveBackgroundColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 80,
        },
      }}
    >
      {listOfTaps.map((target) => (
        <Tabs.Screen
          name={target.title.toLocaleLowerCase()}
          options={{
            headerShown: false,
            title: target.title,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={target.icon}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TapsLayout;
