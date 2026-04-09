import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function MyProfileScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>Huanym98</Text>
      <Text style={styles.bio}>旅行爱好者 / 城市漫游 / 摄影</Text>
      <View style={styles.statsRow}>
        <Text style={styles.stat}>12 行程</Text>
        <Text style={styles.stat}>235 粉丝</Text>
        <Text style={styles.stat}>89 关注</Text>
      </View>
      <Link href="/profile/edit" style={styles.linkBtn}>编辑资料</Link>
      <Link href="/profile/u2" style={styles.linkBtn}>查看示例他人主页</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
  name: { fontSize: 30, fontWeight: '700', color: '#111' },
  bio: { color: '#6B7280' },
  statsRow: { flexDirection: 'row', gap: 12, marginVertical: 8 },
  stat: { backgroundColor: '#F7F7F8', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 99 },
  linkBtn: {
    borderRadius: 12,
    backgroundColor: '#111',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12
  }
});
