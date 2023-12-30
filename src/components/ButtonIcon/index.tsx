import { styles } from "./styles";

import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import DiscordImg from "../../assets/discord.png";

type Props = TouchableOpacityProps & {
  title: string;
};

export const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <View style={styles.iconsWrapper}>
        <Image source={DiscordImg} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
