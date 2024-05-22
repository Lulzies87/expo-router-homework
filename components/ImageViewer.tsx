import { StyleSheet, Image, ImageSourcePropType } from "react-native";

type ImageViewerProps = {
  imageURL: ImageSourcePropType;
};

export default function ImageViewer({ imageURL }: ImageViewerProps) {
  return <Image source={imageURL} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
