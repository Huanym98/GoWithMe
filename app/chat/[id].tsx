import { chats } from '@/data/mock';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const chat = chats.find((item) => item.id === id) ?? chats[0];

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{chat.name}</Text>
      <View style={styles.bubbleSelf}><Text style={styles.selfText}>我已经写好了大致行程，你看看～</Text></View>
      <View style={styles.bubbleOther}><Text>{chat.preview}</Text></View>
      <Text style={styles.tip}>MVP 演示：后续接入 Supabase Realtime</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 10 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  bubbleSelf: { alignSelf: 'flex-end', backgroundColor: '#FFEEE9', borderRadius: 14, padding: 10, maxWidth: '80%' },
  bubbleOther: { alignSelf: 'flex-start', backgroundColor: '#F3F4F6', borderRadius: 14, padding: 10, maxWidth: '80%' },
  selfText: { color: '#7C2D12' },
  tip: { marginTop: 8, color: '#9CA3AF' }
});
