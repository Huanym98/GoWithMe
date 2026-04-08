import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerTitleAlign: 'left',
        tabBarActiveTintColor: '#FF6B57',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: { height: 84, paddingTop: 8 },
        tabBarIcon: ({ color, size }) => {
          const map: Record<string, keyof typeof Ionicons.glyphMap> = {
            home: 'home-outline',
            discover: 'search-outline',
            publish: 'add-circle-outline',
            inbox: 'chatbubble-ellipses-outline',
            profile: 'person-outline'
          };
          return <Ionicons name={map[route.name] ?? 'ellipse-outline'} size={size} color={color} />;
        }
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
