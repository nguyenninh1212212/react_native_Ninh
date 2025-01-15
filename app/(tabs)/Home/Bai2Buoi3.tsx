import CardNotifi from "@/components/cardAction/CardNotifi";
import { Text, SafeAreaView, View, StyleSheet, FlatList } from "react-native";
const HomeScreen3 = () => {
  const fakeData = [
    {
      title: "Thông báo",
      content: "Nhận giải iphone 11",
      datetime: "15/01/2025 - 10:02AM",
    },
    {
      title: "Thông báo",
      content: "Nhận giải iphone 11",
      datetime: "15/01/2025 - 10:02AM",
    },
    {
      title: "Thông báo",
      content: "Nhận giải iphone 11",
      datetime: "15/01/2025 - 10:02AM",
    },
    {
      title: "Thông báo",
      content: "Nhận giải iphone 11",
      datetime: "15/01/2025 - 10:02AM",
    },
    {
      title: "Thông báo",
      content: "Nhận giải iphone 11",
      datetime: "15/01/2025 - 10:02AM",
    },
    {
      title: "Thông báo",
      content: "Nhận giải iphone 11",
      datetime: "15/01/2025 - 10:02AM",
    },
  ];
  return (
    <SafeAreaView>
      <View className="w-screen h-screen flex justify-center items-center">
        <View>
          <FlatList
            data={fakeData}
            renderItem={({ item }) => (
              <CardNotifi
                title={item.title}
                content={item.content}
                datetime={item.datetime}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen3;
