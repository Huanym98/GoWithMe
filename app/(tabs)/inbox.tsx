import { chats } from '@/data/mock';
import { Link } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function InboxScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>消息</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/chat/${item.id}`} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.preview}>{item.preview}</Text>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 30, fontWeight: '700', marginBottom: 14 },
  item: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6', paddingVertical: 14 },
  name: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  preview: { color: '#6B7280' }
});
