import { Link } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ParticleLogo } from '@/components/particle-logo';

const copy = {
  zh: {
    lang: '中文',
    title: 'Go With Me',
    wechat: '微信登录',
    apple: '通过 Apple 登录',
    other: '其他登录方式',
    qq: 'QQ登录',
    phone: '手机号登录',
    agreePrefix: '我已阅读并同意',
    user: '《用户协议》',
    privacy: '《隐私政策》',
    child: '《儿童/青少年个人信息保护规则》'
  },
  en: {
    lang: 'EN',
    title: 'Go With Me',
    wechat: 'WeChat Sign In',
    apple: 'Sign in with Apple',
    other: 'Other sign in methods',
    qq: 'QQ',
    phone: 'Phone',
    agreePrefix: 'I agree to',
    user: 'User Agreement',
    privacy: 'Privacy Policy',
    child: 'Children/Teen Info Policy'
  }
} as const;

export default function LoginScreen() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const t = copy[lang];

  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.langChip} onPress={() => setLang((l) => (l === 'zh' ? 'en' : 'zh'))}>
          <Text style={styles.langText}>{t.lang} ⌄</Text>
        </TouchableOpacity>

        <View style={styles.brandWrap}>
          <ParticleLogo title={t.title} />
        </View>

        <View style={styles.actionsWrap}>
          <TouchableOpacity style={styles.wechatBtn}>
            <Text style={styles.wechatText}>💬 {t.wechat}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleBtn}>
            <Text style={styles.appleText}> {t.apple}</Text>
          </TouchableOpacity>

          <View style={styles.otherWrap}>
            <Text style={styles.otherText}>{t.other} ⌃</Text>
          </View>

          <View style={styles.quickLoginRow}>
            <View style={styles.quickLoginItem}>
              <TouchableOpacity style={styles.qqBtn}>
                <Text style={styles.qqIcon}>🐧</Text>
              </TouchableOpacity>
              <Text style={styles.quickLabel}>{t.qq}</Text>
            </View>

            <View style={styles.quickLoginItem}>
              <TouchableOpacity style={styles.phoneBtn}>
                <Text style={styles.phoneIcon}>⌁</Text>
              </TouchableOpacity>
              <Text style={styles.quickLabel}>{t.phone}</Text>
            </View>
          </View>
        </View>

        <View style={styles.agreementWrap}>
          <Text style={styles.agreeCircle}>◯</Text>
          <View style={styles.agreementTextGroup}>
            <Text style={styles.agreementText}>{t.agreePrefix} </Text>
            <View style={styles.linksRow}>
              <Link href="/agreements/user" style={styles.agreementLink}>{t.user}</Link>
              <Link href="/agreements/privacy" style={styles.agreementLink}>{t.privacy}</Link>
            </View>
            <Link href="/agreements/child" style={styles.agreementLink}>{t.child}</Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outer: { flex: 1, backgroundColor: '#FFFFFF', padding: 16 },
  card: {
    flex: 1,
    borderRadius: 22,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30
  },
  langChip: {
    alignSelf: 'flex-end',
    height: 58,
    borderRadius: 29,
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 24,
    justifyContent: 'center'
  },
  langText: { fontSize: 21, color: '#111' },
  brandWrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  actionsWrap: { gap: 14 },
  wechatBtn: {
    height: 78,
    borderRadius: 40,
    backgroundColor: '#8DCEAA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wechatText: { fontSize: 22, color: '#EAF9EF', fontWeight: '600' },
  appleBtn: {
    height: 78,
    borderRadius: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appleText: { fontSize: 22, color: '#7F7F7F', fontWeight: '600' },
  otherWrap: { marginTop: 10, alignItems: 'center', justifyContent: 'center' },
  otherText: { fontSize: 22, color: '#7D7D7D' },
  quickLoginRow: { marginTop: 4, flexDirection: 'row', justifyContent: 'center', gap: 30 },
  quickLoginItem: { alignItems: 'center', gap: 8 },
  qqBtn: {
    height: 84,
    width: 84,
    borderRadius: 20,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  phoneBtn: {
    height: 84,
    width: 84,
    borderRadius: 42,
    backgroundColor: '#8A8A8A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  qqIcon: { fontSize: 34 },
  phoneIcon: { fontSize: 34, color: '#fff' },
  quickLabel: { fontSize: 18, color: '#B2B2B2' },
  agreementWrap: { marginTop: 18, flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  agreeCircle: { fontSize: 34, color: '#767676', lineHeight: 34 },
  agreementTextGroup: { flex: 1 },
  agreementText: { fontSize: 18, lineHeight: 26, color: '#444' },
  linksRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 4 },
  agreementLink: {
    fontSize: 18,
    lineHeight: 30,
    color: '#2F4858',
    textDecorationLine: 'underline',
    marginRight: 6
  }
});
