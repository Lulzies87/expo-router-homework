import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ imageURL }: any) {
  return <Image source={imageURL} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 18,
  },
});
