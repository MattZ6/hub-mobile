import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Animated, Easing } from 'react-native';
import Reanimated from 'react-native-reanimated';

// import Button from '~/components/OutlineButton';

const data = [
  'React native',
  'ReactJS',
  'React',
  'Angular',
  'VueJS',
  'React native',
  'ReactJS',
  'React',
  'Angular',
  'VueJS',
  'React native',
  'ReactJS',
  'React',
  'Angular',
  'VueJS',
  'React native',
  'ReactJS',
  'React',
  'Angular',
  'VueJS',
];

const HEADER_HEIGHT = 56 + StatusBar.currentHeight;

export default function Home() {
  const offset = 0;
  const scrollY = new Reanimated.Value(0);
  const diffClampScrollY = Reanimated.diffClamp(scrollY, 0, HEADER_HEIGHT);

  // const headerY = scrollY.interpolate({
  //   inputRange: [0, HEADER_HEIGHT],
  //   outputRange: [0, -HEADER_HEIGHT],
  //   extrapolate: 'clamp',
  // });

  const headerY = Reanimated.interpolate(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  // const onScrollEndSnapToEdge = event => {
  //   const { y } = event.nativeEvent.contentOffset;

  //   const xxx = y - 56 >= offset;

  //   // if(y === 0){
  //   //   Animated.timing(scrollY, {
  //   //     toValue: HEADER_HEIGHT,
  //   //     duration: 300,
  //   //     useNativeDriver: true,
  //   //   }).start();
  //   // }

  //   if (y > HEADER_HEIGHT) {
  //     // BAIXO

  //     Animated.timing(scrollY, {
  //       toValue: xxx ? HEADER_HEIGHT : 0,
  //       duration: 200,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       scrollY.setValue(y);
  //       scrollY.setOffset(y - 16);

  //       offset = y;
  //     });
  //   } else {
  //     Animated.timing(scrollY, {
  //       toValue: xxx ? HEADER_HEIGHT : 0,
  //       duration: 200,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       const batata = y - offset;
  //       scrollY.setValue(batata);
  //       scrollY.setOffset(y);
  //       offset = y;
  //     });
  //   }

  //   // if (y + 16 <= offset) {
  //   //   // console.tron.log('BAIXO');

  //   //   visible = false;
  //   // }

  //   // Animated.timing(scrollY, {
  //   //   toValue: visible ? HEADER_HEIGHT : 0,
  //   //   duration: 300,
  //   //   useNativeDriver: true,
  //   // }).start(() => {
  //   //   offset = y;

  //   //   scrollY.setOffset(y + 16);
  //   //   scrollY.setValue(visible ? HEADER_HEIGHT : 0);
  //   // });

  //   // scrollY.setValue(offset);

  //   // scrollY.setValue(offset);
  //   // scrollY.setValue(0);
  //   // console.tron.log(`Y: ${y} - OFFSET: ${offset}`);

  //   // console.tron.log(scrollY);

  //   // if (y > 0 && y < scrollY / 2) {
  //   //   if (_scrollView) {
  //   //     _scrollView.scrollTo({ y: 0 });
  //   //   }
  //   // } else if (scrollY / 2 <= y && y < scrollY) {
  //   //   if (_scrollView) {
  //   //     _scrollView.scrollTo({ y: scrollY });
  //   //   }
  //   // }
  // };

  const animatedEvent = Reanimated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY },
        },
      },
    ],
    { useNativeDriver: true }
  );

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: HEADER_HEIGHT,
          backgroundColor: '#222222',
          zIndex: 10,
          elevation: 10,
          transform: [{ translateY: headerY }],
        }}
      />
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={1}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
        // onScrollEndDrag={onScrollEndSnapToEdge}
        onScroll={animatedEvent}>
        {data.map((x, i) => (
          <Text
            key={String(i)}
            style={{ color: '#fff', height: 56, padding: 16, fontSize: 18 }}>
            {x}
          </Text>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

Home.navigationOptions = {
  headerShown: false,
};
