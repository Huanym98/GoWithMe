import { Link } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>歌觅 Go With Me</Text>
      <Text style={styles.subtitle}>找旅行搭子 · 发结构化行程 · 记录城市故事</Text>
      <TextInput placeholder="手机号 / 邮箱" style={styles.input} />
      <TextInput placeholder="密码" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.primaryBtn}>
        <Link href="/(tabs)" style={styles.btnText}>进入 App</Link>
      </TouchableOpacity>
      <Text style={styles.hint}>新用户可直接进入后在“我的”页完善资料</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff', gap: 12 },
  logo: { fontSize: 30, fontWeight: '700', color: '#111' },
  subtitle: { color: '#6B7280', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ECECEC', borderRadius: 14, padding: 14, fontSize: 16 },
  primaryBtn: {
    marginTop: 8,
    backgroundColor: '#FF6B57',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center'
  },
  btnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  hint: { textAlign: 'center', color: '#9CA3AF', marginTop: 10 }
});
