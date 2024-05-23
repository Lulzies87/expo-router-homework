import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";

type NavButtonProps = {
  screenName: string;
  innerText: string;
};

export default function NavButton({ screenName, innerText }: NavButtonProps) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(screenName as never);
  };

  return (
    <View style={styles.buttonWrapper}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{innerText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: "#4C0033",
    width: 300,
    borderWidth: 2,
    borderColor: "#790252",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  button: {
    width: "100%",
    padding: 20,
  },
  buttonText: {
    color: "#E80F88",
    fontSize: 16,
    textAlign: "center",
  },
});
