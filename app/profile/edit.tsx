import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function EditProfileScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>编辑资料</Text>
      <TextInput style={styles.input} defaultValue="Huanym98" placeholder="昵称" />
      <TextInput style={styles.input} defaultValue="旅行爱好者 / 城市漫游 / 摄影" placeholder="简介" />
      <TextInput style={styles.input} defaultValue="上海" placeholder="常驻城市" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#ECECEC', borderRadius: 12, padding: 14 }
});
