import { TripCard } from '@/components/trip-card';
import { trips } from '@/data/mock';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.title}>发现</Text>
      <TextInput placeholder="搜索用户 / 目的地 / 行程" style={styles.search} />
      <Text style={styles.section}>热门目的地</Text>
      {trips.map((trip) => (
        <TripCard key={`discover-${trip.id}`} trip={trip} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16, paddingBottom: 40 },
  title: { fontSize: 30, fontWeight: '700', marginBottom: 12 },
  search: { backgroundColor: '#F3F4F6', borderRadius: 14, padding: 14, marginBottom: 16 },
  section: { fontSize: 17, fontWeight: '600', marginBottom: 10 }
});
