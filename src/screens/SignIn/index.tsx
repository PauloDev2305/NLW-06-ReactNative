import { View, Text, StatusBar, Image } from "react-native";

import { styles } from "./style";

import Splash from "../../../assets/splash.png";

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Image resizeMode="stretch" source={Splash} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`} suas jogatinas {`\n`} facilmente
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games favoritos com seus amigos
        </Text>
      </View>
    </View>
  );
};
