import { TripCard } from '@/components/trip-card';
import { trips } from '@/data/mock';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.title}>今天，想和谁一起出发？</Text>
      <Text style={styles.subtitle}>推荐行程</Text>
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>城市挑战：本周打卡 3 个新地点可解锁“探索者”徽章</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F7F7F8' },
  content: { padding: 16, paddingBottom: 40 },
  title: { fontSize: 28, fontWeight: '700', color: '#111', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  banner: { backgroundColor: '#FFF1EE', borderRadius: 16, padding: 14, marginTop: 6 },
  bannerText: { color: '#7B341E', lineHeight: 20 }
});
