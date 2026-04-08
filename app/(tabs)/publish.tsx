import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PublishScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>发布行程</Text>
      <TextInput placeholder="行程标题" style={styles.input} />
      <TextInput placeholder="目的地" style={styles.input} />
      <TextInput placeholder="出发日期，例如 2026-05-01" style={styles.input} />
      <TextInput placeholder="你想找什么样的搭子？" style={[styles.input, styles.multiline]} multiline />
      <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>发布</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ECECEC', borderRadius: 14, padding: 14 },
  multiline: { height: 120, textAlignVertical: 'top' },
  btn: { marginTop: 10, borderRadius: 14, backgroundColor: '#FF6B57', padding: 14, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '600' }
});
