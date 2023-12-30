import { View, Text, StatusBar, Image } from "react-native";

import { styles } from "./style";
import { ButtonIcon } from "../../components/ButtonIcon";
import IlustrationImage from "../../assets/illustration.png";

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Image
        resizeMode="stretch"
        source={IlustrationImage}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
};
