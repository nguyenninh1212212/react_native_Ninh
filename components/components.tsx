import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export const tit0 = () => {
  return (
    <View className=" border-b w-screen text-left pb-5 pl-5">
      <Text className="text-xl"> Đăng nhập</Text>
    </View>
  );
};
export const tit2 = () => {
  return (
    <TouchableOpacity className="w-full h-16 bg-stone-300 rounded-lg items-center justify-center">
      <Text className="text-white">Click me</Text>
    </TouchableOpacity>
  );
};

export const tit1 = ({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: (text: string) => void;
}) => {
  return (
    <View className="w-full flex-col gap-y-2 ">
      <Text className="text-lg">Nhập số điện thoại</Text>
      <Text>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại oneHousing
        Pro
      </Text>
      <TextInput
        placeholder="aaa"
        style={{ height: 40, width: "100%" }}
        keyboardType="phone-pad"
        value={phone}
        onChange={(e) => setPhone(e.nativeEvent.text)}
      />
    </View>
  );
};

export const ActionComponents = ({
  num,
  title,
}: {
  num: number;
  title: string;
}) => {
  return (
    <View className="w- items-center justify-center gap-1 flex-row">
      <Text className="text-xl">{num}</Text>
      <Text className="text-sm text-stone-400">{title}</Text>
    </View>
  );
};
