import { Text, StyleSheet, Platform } from "react-native";


const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 30,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}),
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    // make width responsive
    maxWidth: '80%',
    minWidth: '20%',
  },
});

export default Title;
