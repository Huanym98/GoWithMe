import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function UserProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.page}>
      <Text style={styles.name}>用户 {id}</Text>
      <Text style={styles.bio}>喜欢徒步、海岛和城市夜景，正在找暑期欧洲搭子。</Text>
      <Text style={styles.card}>近期公开行程：冰岛环岛摄影线（2026-05-02）</Text>
      <Text style={styles.card}>TA 的旅行日记：雷克雅未克凌晨四点的光</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 10 },
  name: { fontSize: 28, fontWeight: '700' },
  bio: { color: '#6B7280' },
  card: { backgroundColor: '#F7F7F8', borderRadius: 14, padding: 12 }
});
