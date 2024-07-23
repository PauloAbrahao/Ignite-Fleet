import {Container, Title, Slogan} from "./styles";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {WEB_CLIENT_ID, IOS_CLIENT_ID} from "@env";

import backgroundImg from "../../assets/background.png";
import {Button} from "../../components/Button";
import {useState} from "react";
import {Alert} from "react-native";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);

      const {idToken} = await GoogleSignin.signIn();

      if (idToken) {
      } else {
        Alert.alert(
          "Entrar",
          "Não foi possível realizar o login com o google."
        );
        setIsAuthenticating(false);
      }
    } catch (e) {
      console.log("handleGoogleSignIn", e);
      Alert.alert("Entrar", "Não foi possível realizar o login com o google.");
      setIsAuthenticating(false);
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>

      <Button title="Entrar com Google" onPress={handleGoogleSignIn} />
    </Container>
  );
}
