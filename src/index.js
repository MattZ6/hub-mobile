import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
// import {
//   StatusBar,
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   TextInput,
// } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#181818" barStyle="light-content" />
      <Routes />
    </>
  );
}

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: '#181818',
//     flex: 1,
//   },
//   header: {
//     marginTop: 65,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 10,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 40,
//     fontWeight: 'bold',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: {width: 1, height: 2},
//     textShadowRadius: 5,
//   },
//   input: {
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 8,
//     backgroundColor: 'rgba(196,196,196,0.05)',
//     marginTop: 20,
//     color: '#ddd',
//     fontSize: 16,
//   },
//   list: {
//     flex: 1,
//   },
//   item: {
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     backgroundColor: '#282828',
//   },
//   content: {
//     marginLeft: 16,
//     paddingRight: 20,
//     flex: 1,
//   },
//   itemTitle: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemDescription: {
//     color: '#444',
//     fontSize: 15,
//     marginTop: 4,
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
// });

// function App() {
//   console.tron.log('TESTE');

//   return (
//     <>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="light-content"
//       />
//       <View style={styles.background}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Buscar</Text>

//           <TextInput
//             placeholder="Encontrar músicos"
//             style={styles.input}
//             placeholderTextColor="rgba(255,255,255,0.3)"
//             autoCapitalize="none"
//             autoCorrect={false}
//           />
//         </View>
//         <ScrollView style={styles.list}>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MattZ6</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista em <Text style={styles.bold}>Machine Head</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#DeathStroke</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Vocalista em <Text style={styles.bold}>Cannibal Corpse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MB1</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista e vocalista em{' '}
//                   <Text style={styles.bold}>Muse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#Zorba</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Baterista e vocalista em{' '}
//                   <Text style={styles.bold}>
//                     Nome da banda grande demais para ser exibido normalmente
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MeuNome</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Integrante de <Text style={styles.bold}>3 bandas</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MattZ6</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista em <Text style={styles.bold}>Machine Head</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#DeathStroke</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Vocalista em <Text style={styles.bold}>Cannibal Corpse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MB1</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista e vocalista em{' '}
//                   <Text style={styles.bold}>Muse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#Zorba</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Baterista e vocalista em{' '}
//                   <Text style={styles.bold}>
//                     Nome da banda grande demais para ser exibido normalmente
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MeuNome</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Integrante de <Text style={styles.bold}>3 bandas</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MattZ6</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista em <Text style={styles.bold}>Machine Head</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#DeathStroke</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Vocalista em <Text style={styles.bold}>Cannibal Corpse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MB1</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista e vocalista em{' '}
//                   <Text style={styles.bold}>Muse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#Zorba</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Baterista e vocalista em{' '}
//                   <Text style={styles.bold}>
//                     Nome da banda grande demais para ser exibido normalmente
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MeuNome</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Integrante de <Text style={styles.bold}>3 bandas</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MattZ6</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista em <Text style={styles.bold}>Machine Head</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#DeathStroke</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Vocalista em <Text style={styles.bold}>Cannibal Corpse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MB1</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista e vocalista em{' '}
//                   <Text style={styles.bold}>Muse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#Zorba</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Baterista e vocalista em{' '}
//                   <Text style={styles.bold}>
//                     Nome da banda grande demais para ser exibido normalmente
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MeuNome</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Integrante de <Text style={styles.bold}>3 bandas</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MattZ6</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista em <Text style={styles.bold}>Machine Head</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#DeathStroke</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Vocalista em <Text style={styles.bold}>Cannibal Corpse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MB1</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista e vocalista em{' '}
//                   <Text style={styles.bold}>Muse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#Zorba</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Baterista e vocalista em{' '}
//                   <Text style={styles.bold}>
//                     Nome da banda grande demais para ser exibido normalmente
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MeuNome</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Integrante de <Text style={styles.bold}>3 bandas</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MattZ6</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista em <Text style={styles.bold}>Machine Head</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#DeathStroke</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Vocalista em <Text style={styles.bold}>Cannibal Corpse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MB1</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista e vocalista em{' '}
//                   <Text style={styles.bold}>Muse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#Zorba</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Baterista e vocalista em{' '}
//                   <Text style={styles.bold}>
//                     Nome da banda grande demais para ser exibido normalmente
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MeuNome</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Integrante de <Text style={styles.bold}>3 bandas</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MattZ6</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista em <Text style={styles.bold}>Machine Head</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#DeathStroke</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Vocalista em <Text style={styles.bold}>Cannibal Corpse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MB1</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista e vocalista em{' '}
//                   <Text style={styles.bold}>Muse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#Zorba</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Baterista e vocalista em{' '}
//                   <Text style={styles.bold}>
//                     Nome da banda grande demais para ser exibido normalmente
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MeuNome</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Integrante de <Text style={styles.bold}>3 bandas</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MattZ6</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista em <Text style={styles.bold}>Machine Head</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#DeathStroke</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Vocalista em <Text style={styles.bold}>Cannibal Corpse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MB1</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Guitarrista e vocalista em{' '}
//                   <Text style={styles.bold}>Muse</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#Zorba</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Baterista e vocalista em{' '}
//                   <Text style={styles.bold}>
//                     Nome da banda grande demais para ser exibido normalmente
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.item}>
//               <Image
//                 fadeDuration={500}
//                 style={styles.image}
//                 resizeMode="cover"
//                 source={{uri: `https://i.pravatar.cc/200?u=${Math.random()}`}}
//               />
//               <View style={styles.content}>
//                 <Text style={styles.itemTitle}>#MeuNome</Text>
//                 <Text style={styles.itemDescription} numberOfLines={1}>
//                   Integrante de <Text style={styles.bold}>3 bandas</Text>
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </>
//   );
// }

// export default App;
