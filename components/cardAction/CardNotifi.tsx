import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

interface CardNotifiProps {
  title: string;
  content: string;
  datetime: string;
}

const CardNotifi: React.FC<CardNotifiProps> = ({
  title,
  content,
  datetime,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://www.svgrepo.com/svg/327448/notifications-circle",
          }}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.datetime}>{datetime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
  },
  datetime: {
    fontSize: 12,
    color: "gray",
  },
});

export default CardNotifi;
