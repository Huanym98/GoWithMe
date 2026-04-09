import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.langChip}>
          <Text style={styles.langText}>中文</Text>
          <Ionicons name="chevron-down" size={22} color="#111" />
        </TouchableOpacity>

        <View style={styles.brandWrap}>
          <Text style={styles.brand}>Go With Me</Text>
        </View>

        <View style={styles.actionsWrap}>
          <TouchableOpacity style={styles.wechatBtn}>
            <Ionicons name="logo-wechat" size={25} color="#FFFFFF" />
            <Text style={styles.wechatText}>微信登录</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleBtn}>
            <Ionicons name="logo-apple" size={30} color="#8C8C8C" />
            <Text style={styles.appleText}>通过 Apple 登录</Text>
          </TouchableOpacity>

          <View style={styles.otherWrap}>
            <Text style={styles.otherText}>其他登录方式</Text>
            <Ionicons name="chevron-up" size={20} color="#767676" />
          </View>

          <View style={styles.quickLoginRow}>
            <View style={styles.quickLoginItem}>
              <TouchableOpacity style={styles.qqBtn}>
                <Text style={styles.qqIcon}>🐧</Text>
              </TouchableOpacity>
              <Text style={styles.quickLabel}>QQ登录</Text>
            </View>

            <View style={styles.quickLoginItem}>
              <TouchableOpacity style={styles.phoneBtn}>
                <FontAwesome name="mobile-phone" size={34} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={styles.quickLabel}>手机号登录</Text>
            </View>
          </View>
        </View>

        <View style={styles.agreementWrap}>
          <Ionicons name="ellipse-outline" size={50} color="#767676" />
          <Text style={styles.agreementText}>
            我已阅读并同意《用户协议》《隐私政策》{'
'}《儿童/青少年个人信息保护规则》
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16
  },
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  langText: {
    fontSize: 42 / 2,
    color: '#111'
  },
  brandWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  brand: {
    fontSize: 76 / 2,
    lineHeight: 82 / 2,
    fontWeight: '800',
    letterSpacing: 0.4,
    color: '#1F2346'
  },
  actionsWrap: {
    gap: 14
  },
  wechatBtn: {
    height: 78,
    borderRadius: 40,
    backgroundColor: '#8DCEAA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14
  },
  wechatText: {
    fontSize: 22,
    color: '#EAF9EF',
    fontWeight: '600'
  },
  appleBtn: {
    height: 78,
    borderRadius: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12
  },
  appleText: {
    fontSize: 22,
    color: '#7F7F7F',
    fontWeight: '600'
  },
  otherWrap: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  otherText: {
    fontSize: 22,
    color: '#7D7D7D'
  },
  quickLoginRow: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30
  },
  quickLoginItem: {
    alignItems: 'center',
    gap: 8
  },
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
  qqIcon: {
    fontSize: 34
  },
  quickLabel: {
    fontSize: 18,
    color: '#B2B2B2'
  },
  agreementWrap: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10
  },
  agreementText: {
    flex: 1,
    fontSize: 18,
    lineHeight: 30,
    color: '#444'
  }
});
