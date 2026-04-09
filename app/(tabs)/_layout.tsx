import { Tabs } from 'expo-router';
import { Text } from 'react-native';

const iconMap: Record<string, string> = {
  home: '⌂',
  discover: '◉',
  publish: '+',
  inbox: '✉',
  profile: '◌'
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerTitleAlign: 'left',
        tabBarActiveTintColor: '#FF6B57',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: { height: 84, paddingTop: 8 },
        tabBarIcon: ({ color }) => (
          <Text style={{ color, fontSize: 18, marginBottom: -2 }}>{iconMap[route.name] ?? '·'}</Text>
        )
      })}
    >
      <Tabs.Screen name="home" options={{ title: '首页' }} />
      <Tabs.Screen name="discover" options={{ title: '发现' }} />
      <Tabs.Screen name="publish" options={{ title: '发布' }} />
      <Tabs.Screen name="inbox" options={{ title: '消息' }} />
      <Tabs.Screen name="profile" options={{ title: '我的' }} />
    </Tabs>
  );
}
