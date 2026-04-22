import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text>Meu nome é Thiago e gosto de musica e relaxo com jogos.</Text>

      <Image
        source={{ uri: 'https://via.placeholder.com/200' }}
        style={styles.image}
      />

      <Button title="Voltar" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, marginBottom: 10 },
  image: { width: 200, height: 200, margin: 10 }
});