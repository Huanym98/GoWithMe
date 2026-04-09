import { ScrollView, StyleSheet, Text } from 'react-native';

export default function UserAgreementScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.title}>用户协议</Text>
      <Text style={styles.body}>本页面为用户协议详情占位页，可在后续接入完整法务文本。</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16, gap: 12 },
  title: { fontSize: 28, fontWeight: '700' },
  body: { fontSize: 16, lineHeight: 24, color: '#374151' }
});
