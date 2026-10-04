import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App de Estudos</Text>
      
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/223/223096.png' }} 
        style={styles.logo} 
      />
      
      <Text style={styles.subtitulo}>Organize provas, tarefas e revisões.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Matemática</Text>
        <Text style={styles.cardTexto}>Revisar funções para sexta-feira.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>História</Text>
        <Text style={styles.cardTexto}>Ler capítulo sobre Revolução Industrial.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  logo: {
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 4,
  },
  cardTexto: {
    fontSize: 14,
    color: '#475569',
  },
});