import { useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export function ParticleLogo({ title }: { title: string }) {
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 1200, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 0, duration: 1200, useNativeDriver: true })
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [pulse]);

  const particles = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: (i * 17) % 240,
        top: (i * 29) % 84,
        size: i % 3 === 0 ? 4 : 3
      })),
    []
  );

  const glowOpacity = pulse.interpolate({ inputRange: [0, 1], outputRange: [0.16, 0.4] });

  return (
    <View style={styles.wrap}>
      <Animated.View style={[styles.particleLayer, { opacity: glowOpacity }]}> 
        {particles.map((dot) => (
          <View
            key={dot.id}
            style={{
              position: 'absolute',
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              borderRadius: dot.size,
              backgroundColor: '#1F2346'
            }}
          />
        ))}
      </Animated.View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  particleLayer: {
    position: 'absolute',
    width: 240,
    height: 84
  },
  title: {
    fontSize: 52,
    fontWeight: '800',
    color: '#1F2346',
    letterSpacing: 0.8
  }
});
