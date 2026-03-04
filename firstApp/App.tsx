import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; // 1. Importação corrigida
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.textH1]}>🎉 Bem vindo a sala de aula 🎉</Text>
      <Text style={[styles.card1]}> 📝Vamos aprender reactive native</Text>
      <Text style={[styles.card2]}> 🚀Inline styles são fáceis de entender</Text>
      <Text style={[styles.card3]}> 🌈🎨Alterar cores e tamanhos é divertido</Text>
      <Text style={[styles.card4]}> ✨Desafio: tente recriar este layout!</Text>
      <StatusBar style="light" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#147bd1',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  cardGeral: {
    fontSize: 15,
    marginBottom: 10,
    padding: 30,
  },
  card1: {
    color: '#4682b4',
    backgroundColor: '#e6f2ff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  card2: {
    color: '#54a174',
    backgroundColor: '#d4f5e1',
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
  },
  card3:{
    color: '#ff8d05',
    backgroundColor: '#fff5e6',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10
  },
  card4:{
    color: '#9e40a0',
    backgroundColor: '#f3e6ff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  textH1: {
    color: 'orange',
    fontSize: 28,
    paddingBottom: 15,
  },
});