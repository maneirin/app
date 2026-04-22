import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>

      <View style={styles.buttons}>
        <View style={styles.btn}>
          <Link href="/sobre" asChild>
            <Button title="Sobre mim" />
          </Link>
        </View>

        <View style={styles.btn}>
          <Link href="/jogos" asChild>
            <Button title="Jogos" />
          </Link>
        </View>

        <View style={styles.btn}>
          <Link href="/filmes" asChild>
            <Button title="Filmes" />
          </Link>
        </View>

        <View style={styles.btn}>
          <Link href="/hobbies" asChild>
            <Button title="Hobbies" />
          </Link>
        </View>

        <View style={styles.btn}>
          <Link href="/tech" asChild>
            <Button title="Tecnologia" />
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  title: {
    fontSize: 26,
    marginBottom: 25
  },

  buttons: {
    width: '15%',
    gap: 10
  },

  btn: {
    marginBottom: 8
  }
});