import { trips } from '@/data/mock';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TripDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = trips.find((item) => item.id === id) ?? trips[0];

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{trip.title}</Text>
      <Text style={styles.meta}>目的地：{trip.city}</Text>
      <Text style={styles.meta}>出发时间：{trip.date}</Text>
      <Text style={styles.meta}>队伍状态：{trip.members}</Text>
      <Text style={styles.block}>行程亮点：赏樱 + 街区漫游 + 本地咖啡馆打卡 + 轻社交破冰活动。</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 10 },
  title: { fontSize: 28, fontWeight: '700', color: '#111', marginBottom: 6 },
  meta: { color: '#374151', fontSize: 16 },
  block: { marginTop: 12, lineHeight: 22, color: '#4B5563' }
});
