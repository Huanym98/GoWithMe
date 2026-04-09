import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

type Trip = { id: string; title: string; city: string; date: string; members: string; likes: number };

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <Link href={`/trip/${trip.id}`} style={styles.card}>
      <View>
        <Text style={styles.title}>{trip.title}</Text>
        <Text style={styles.meta}>{trip.city} · {trip.date}</Text>
        <Text style={styles.meta}>组队进度 {trip.members} · ❤️ {trip.likes}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ECECEC',
    padding: 16,
    marginBottom: 12
  },
  title: { fontSize: 17, fontWeight: '600', color: '#111', marginBottom: 8 },
  meta: { color: '#6B7280', lineHeight: 20 }
});
