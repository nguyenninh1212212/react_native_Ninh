import { Link } from "expo-router";
import { Text, SafeAreaView, View, Image, ImageBackground } from "react-native";

const ActionComponents = ({ num, title }: { num: number; title: string }) => {
  return (
    <View className="w- items-center justify-center gap-1 flex-row">
      <Text className="text-xl">{num}</Text>
      <Text className="text-sm text-stone-400">{title}</Text>
    </View>
  );
};

export default ActionComponents;
