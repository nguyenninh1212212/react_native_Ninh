import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { ViewStyle } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol"; // Giả sử bạn dùng IconSymbol cho icon
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,

        headerTransparent: false,
        tabBarButton: HapticTab,
        tabBarStyle: { display: "none" },
        headerStyle: {
          backgroundColor: "transparent", // Màu nền của header (nếu cần)
          height: 0, // Điều chỉnh chiều cao header (mặc định thường khoảng 56px)
          marginTop: 0, // Loại bỏ khoảng cách trên
          paddingTop: 0, // Loại bỏ padding trên header
        },
      }}
    ></Tabs>
  );
}

const styles: ViewStyle = {
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderTopWidth: 0,
  borderTopColor: "transparent",
  shadowColor: "#000",
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 0.1,
  height: 100,
};
