import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="trip/[id]" options={{ headerShown: true, title: '行程详情' }} />
        <Stack.Screen name="chat/[id]" options={{ headerShown: true, title: '聊天' }} />
        <Stack.Screen name="profile/edit" options={{ headerShown: true, title: '编辑资料' }} />
        <Stack.Screen name="profile/[id]" options={{ headerShown: true, title: '用户主页' }} />
        <Stack.Screen name="agreements/user" options={{ headerShown: true, title: '用户协议' }} />
        <Stack.Screen name="agreements/privacy" options={{ headerShown: true, title: '隐私政策' }} />
        <Stack.Screen name="agreements/child" options={{ headerShown: true, title: '儿童/青少年保护规则' }} />
      </Stack>
    </>
  );
}
