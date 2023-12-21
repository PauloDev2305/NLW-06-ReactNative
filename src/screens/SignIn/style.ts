import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.backgraund,
  },
  input: {
    height: 360,
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
  },
  image: {
    height: 30,
    width: 30,
  },
  content: {
    marginTop: -40,
  },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
  },
  subTitle: {
    color: theme.colors.heading,
    textAlign: "center",
    marginBottom: 64,
    fontSize: 15,
  },
});
