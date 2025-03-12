// import React from "react";

// import { ContentUnavailable } from "@/components/ui/ContentUnavailable";
// import * as Form from "@/components/ui/Form";
// import { IconSymbol } from "@/components/ui/IconSymbol";
// import {
//   Segments,
//   SegmentsContent,
//   SegmentsList,
//   SegmentsTrigger,
// } from "@/components/ui/Segments";
// import Stack from "@/components/ui/Stack";
// import * as AC from "@bacons/apple-colors";
// import { Link } from "expo-router";
// import { ComponentProps } from "react";
// import {
//   Button,
//   Image,
//   OpaqueColorValue,
//   Switch,
//   Text,
//   View,
// } from "react-native";
// import Animated, {
//   interpolate,
//   useAnimatedRef,
//   useAnimatedStyle,
//   useScrollViewOffset,
// } from "react-native-reanimated";

// function Switches() {
//   const [on, setOn] = React.useState(false);

//   return (
//     <Form.Section title="Toggle">
//       <Form.HStack>
//         <Form.Text>Manual</Form.Text>
//         <View style={{ flex: 1 }} />
//         <Switch value={on} onValueChange={setOn} />
//       </Form.HStack>
//       <Form.Text bold hint={<Switch value={on} onValueChange={setOn} />}>
//         Hint
//       </Form.Text>
//       <Form.Text
//         systemImage={"light.beacon.min"}
//         hint={<Switch value={on} onValueChange={setOn} />}
//       >
//         System Image
//       </Form.Text>
//     </Form.Section>
//   );
// }

// export default function Page() {
//   const ref = useAnimatedRef();
//   const scroll = useScrollViewOffset(ref);
//   const style = useAnimatedStyle(() => {
//     return {
//       opacity: interpolate(scroll.value, [0, 30], [0, 1], "clamp"),
//       transform: [
//         { translateY: interpolate(scroll.value, [0, 30], [5, 0], "clamp") },
//       ],
//     };
//   });

//   return (
//     <View style={{ flex: 1 }}>
//       <Stack.Screen
//         options={{
//           headerLargeTitle: false,
//           headerTitle() {
//             if (process.env.EXPO_OS === "web") {
//               return (
//                 <Animated.View
//                   style={[
//                     style,
//                     { flexDirection: "row", gap: 12, alignItems: "center" },
//                   ]}
//                 >
//                   <Image
//                     source={{ uri: "https://github.com/evanbacon.png" }}
//                     style={[
//                       {
//                         aspectRatio: 1,
//                         height: 30,
//                         borderRadius: 8,
//                         borderWidth: 0.5,
//                         borderColor: AC.separator,
//                       },
//                     ]}
//                   />
//                   <Text
//                     style={{
//                       fontSize: 20,
//                       color: AC.label,
//                       fontWeight: "bold",
//                     }}
//                   >
//                     Bacon Components
//                   </Text>
//                 </Animated.View>
//               );
//             }
//             return (
//               <Animated.Image
//                 source={{ uri: "https://github.com/evanbacon.png" }}
//                 style={[
//                   style,
//                   {
//                     aspectRatio: 1,
//                     height: 30,
//                     borderRadius: 8,
//                     borderWidth: 0.5,
//                     borderColor: AC.separator,
//                   },
//                 ]}
//               />
//             );
//           },
//         }}
//       />
//       <Form.List ref={ref} navigationTitle="Components">
//         <Form.Section>
//           <View style={{ alignItems: "center", gap: 8, padding: 16, flex: 1 }}>
//             <Image
//               source={{ uri: "https://github.com/evanbacon.png" }}
//               style={{
//                 aspectRatio: 1,
//                 height: 64,
//                 borderRadius: 8,
//               }}
//             />
//             <Form.Text
//               style={{
//                 fontSize: 20,
//                 fontWeight: "600",
//               }}
//             >
//               Bacon Components
//             </Form.Text>
//             <Form.Text style={{ textAlign: "center", fontSize: 14 }}>
//               Copy/paste components for universal Expo Router apps.{" "}
//               <Form.Link
//                 style={{
//                   color: AC.link,
//                   fontSize: 14,
//                 }}
//                 href="/info"
//               >
//                 Learn more...
//               </Form.Link>
//             </Form.Text>
//           </View>
//         </Form.Section>

//         <Form.Section title="Features">
//           <Form.Link href="/icon">Icon</Form.Link>
//         </Form.Section>

//         <Form.Section>
//           <Form.HStack style={{ alignItems: "stretch", gap: 12 }}>
//             <TripleItemTest />
//           </Form.HStack>
//         </Form.Section>

//         <Form.Section title="Hints">
//           <Form.Text hint="Long hint with extra content that should float below the content">
//             Normal
//           </Form.Text>

//           {/* Custom with wrap-below */}
//           <Form.HStack style={{ flexWrap: "wrap" }}>
//             <Form.Text>Wrap Below</Form.Text>
//             {/* Spacer */}
//             <View style={{ flex: 1 }} />
//             {/* Right */}
//             <Form.Text style={{ flexShrink: 1, color: AC.secondaryLabel }}>
//               Long list of text that should wrap around when it gets too long
//             </Form.Text>
//           </Form.HStack>
//         </Form.Section>

//         <Switches />
//         <Form.Section
//           title="Segments"
//           footer="Render tabbed content declaratively"
//         >
//           <SegmentsTest />
//         </Form.Section>
//         <Form.Section>
//           <Form.HStack style={{ gap: 16 }}>
//             <Image
//               source={{ uri: "https://github.com/evanbacon.png" }}
//               style={{
//                 aspectRatio: 1,
//                 height: 48,
//                 borderRadius: 999,
//               }}
//             />
//             <View style={{ gap: 4 }}>
//               <Form.Text style={Form.FormFont.default}>Evan's iPhone</Form.Text>
//               <Form.Text style={Form.FormFont.caption}>
//                 This iPhone 16 Pro Max
//               </Form.Text>
//             </View>

//             <View style={{ flex: 1 }} />

//             <IconSymbol
//               color={AC.systemBlue}
//               name="person.fill.badge.plus"
//               size={24}
//               animationSpec={{
//                 effect: {
//                   type: "pulse",
//                 },
//                 repeating: true,
//               }}
//             />
//           </Form.HStack>
//         </Form.Section>
//         <Form.Section
//           title="Links"
//           footer={
//             <Text>
//               Help improve Search by allowing Apple to store the searches you
//               enter into Safari, Siri, and Spotlight in a way that is not linked
//               to you.{"\n\n"}Searches include lookups of general knowledge, and
//               requests to do things like play music and get directions.{"\n"}
//               <Link style={{ color: AC.link }} href="/two">
//                 About Search & Privacy...
//               </Link>
//             </Text>
//           }
//         >
//           {/* Table style: | A   B |*/}
//           <Link href="/two">Next</Link>

//           <Form.Link target="_blank" href="https://evanbacon.dev">
//             Target _blank
//           </Form.Link>

//           <Link href="/two">
//             <View style={{ gap: 4 }}>
//               <Form.Text>Evan's iPhone</Form.Text>
//               <Text style={Form.FormFont.caption}>This iPhone 16 Pro Max</Text>
//             </View>
//           </Link>

//           <Link href="https://expo.dev">Expo</Link>

//           <Form.Link href="/two" hint="Normal">
//             Hint + Link
//           </Form.Link>
//         </Form.Section>
//         <Form.Section title="Icons">
//           <Form.Link href="/two" systemImage="star">
//             Link + Icon
//           </Form.Link>
//           <Form.Link
//             href="/two"
//             systemImage={{ name: "car.fill", color: AC.systemPurple }}
//           >
//             Custom color in link
//           </Form.Link>
//           <Form.Text systemImage="airpodspro.chargingcase.wireless.fill">
//             Item
//           </Form.Text>
//           <FormLabel
//             onPress={() => {
//               console.log("hey");
//             }}
//             systemImage="photo.on.rectangle"
//           >
//             Custom Icon
//           </FormLabel>
//           <Form.Link
//             style={{
//               color: AC.systemGreen,
//             }}
//             href="/two"
//             systemImage="photo.on.rectangle"
//           >
//             Icon inherits link color
//           </Form.Link>
//         </Form.Section>
//         <Form.Section title="Unavailable">
//           <ContentUnavailable internet actions={<Button title="Refresh" />} />

//           <ContentUnavailable search />
//           <ContentUnavailable search="123" />
//           <ContentUnavailable
//             title="Car Not Found"
//             systemImage="car"
//             description="Dude, where's my car?"
//           />
//           <ContentUnavailable
//             title="Custom Unavailable"
//             systemImage={
//               <IconSymbol name="0.square" size={45} color={AC.systemPink} />
//             }
//           />
//         </Form.Section>
//         <Form.Section title="Form Items">
//           <Text>Default</Text>
//           <Button
//             title="RN Button"
//             onPress={() => {
//               console.log("Button pressed");
//             }}
//           />
//           <Button title="RN Button + color" color={AC.systemPurple} />
//           <Form.Text hint="Right">Hint</Form.Text>
//           <Text
//             onPress={() => {
//               console.log("Hey");
//             }}
//           >
//             Pressable
//           </Text>

//           <Text style={{ fontWeight: "bold", color: AC.systemPink }}>
//             Custom style
//           </Text>
//           <Form.Text bold>Bold</Form.Text>

//           <View>
//             <Text>Wrapped</Text>
//           </View>

//           {/* Table style: | A   B |*/}
//           <Form.HStack>
//             <Text style={Form.FormFont.default}>Foo</Text>
//             <View style={{ flex: 1 }} />
//             <Text style={Form.FormFont.secondary}>Bar</Text>
//           </Form.HStack>
//         </Form.Section>
//         <Form.Section title="Table">
//           {/* Table style: | A   B |*/}
//           <Form.Text hint="Expo Router v4">SDK 52</Form.Text>

//           {/* Custom version of same code */}
//           <Form.HStack>
//             <Text style={Form.FormFont.default}>SDK 51</Text>
//             <View style={{ flex: 1 }} />
//             <Text style={Form.FormFont.secondary}>Expo Router v3</Text>
//           </Form.HStack>
//         </Form.Section>

//         <Form.Section>
//           <Form.Text hint="Jan 31, 2025">Release Date</Form.Text>
//           <Form.Text hint="3.6 (250)">Version</Form.Text>

//           <FormExpandable
//             hint="Requires visionOS 1.0 or later and iOS 17.5 or later. Compatible with iPhone, iPad, and Apple Vision."
//             preview="Works on this iPhone"
//             custom
//           >
//             Compatibility
//           </FormExpandable>
//         </Form.Section>

//         <Form.Section
//           title={
//             <Text
//               style={{
//                 fontSize: 18,
//                 fontWeight: "bold",
//                 color: AC.label,
//                 textTransform: "none",
//               }}
//             >
//               Developer
//             </Text>
//           }
//         >
//           <Form.Link
//             href="https://github.com/evanbacon"
//             target="_blank"
//             hintImage={{
//               name: "hand.raised.fill",
//               color: AC.systemBlue,
//               size: 20,
//             }}
//             style={{ color: AC.systemBlue }}
//           >
//             Developer Privacy Policy
//           </Form.Link>
//           <Button
//             title="Stop Testing"
//             color={AC.systemRed}
//             onPress={() => {}}
//           />
//         </Form.Section>
//       </Form.List>
//     </View>
//   );
// }

// function FormExpandable({
//   children,
//   hint,
//   preview,
// }: {
//   custom: true;
//   children?: React.ReactNode;
//   hint?: string;
//   preview?: string;
// }) {
//   const [open, setOpen] = React.useState(false);

//   // TODO: If the entire preview can fit, then just skip the hint.

//   return (
//     <Form.FormItem onPress={() => setOpen(!open)}>
//       <Form.HStack style={{ flexWrap: "wrap" }}>
//         <Form.Text>{children}</Form.Text>
//         {/* Spacer */}
//         <View style={{ flex: 1 }} />
//         {open && (
//           <IconSymbol
//             name={open ? "chevron.up" : "chevron.down"}
//             size={16}
//             color={AC.systemGray}
//           />
//         )}
//         {/* Right */}
//         <Form.Text style={{ flexShrink: 1, color: AC.secondaryLabel }}>
//           {open ? hint : preview}
//         </Form.Text>
//         {!open && (
//           <IconSymbol
//             name={open ? "chevron.up" : "chevron.down"}
//             size={16}
//             color={AC.systemGray}
//           />
//         )}
//       </Form.HStack>
//     </Form.FormItem>
//   );
// }

// function FormLabel({
//   children,
//   systemImage,
//   color,
// }: {
//   /** Only used when `<FormLabel />` is a direct child of `<Section />`. */
//   onPress?: () => void;
//   children: React.ReactNode;
//   systemImage: ComponentProps<typeof IconSymbol>["name"];
//   color?: OpaqueColorValue;
// }) {
//   return (
//     <Form.HStack style={{ gap: 16 }}>
//       <IconSymbol name={systemImage} size={28} color={color ?? AC.systemBlue} />
//       <Text style={Form.FormFont.default}>{children}</Text>
//     </Form.HStack>
//   );
// }

// function SegmentsTest() {
//   return (
//     <View style={{ flex: 1 }}>
//       <Segments defaultValue="account">
//         <SegmentsList>
//           <SegmentsTrigger value="account">Account</SegmentsTrigger>
//           <SegmentsTrigger value="password">Password</SegmentsTrigger>
//         </SegmentsList>

//         <SegmentsContent value="account">
//           <Form.List style={{ backgroundColor: "transparent" }}>
//             <Form.Section>
//               <Text>Account Section</Text>
//             </Form.Section>
//           </Form.List>
//         </SegmentsContent>
//         <SegmentsContent value="password">
//           <Form.List style={{ backgroundColor: "transparent" }}>
//             <Form.Section>
//               <Text>Password Section</Text>
//             </Form.Section>
//           </Form.List>
//         </SegmentsContent>
//       </Segments>
//     </View>
//   );
// }

// function TripleItemTest() {
//   return (
//     <>
//       <HorizontalItem title="Expires" badge="88" subtitle="Days" />

//       <View
//         style={{
//           backgroundColor: AC.separator,
//           width: 0.5,
//           maxHeight: "50%",
//           minHeight: "50%",
//           marginVertical: "auto",
//         }}
//       />

//       <HorizontalItem
//         title="Developer"
//         badge={
//           <IconSymbol
//             name="person.text.rectangle"
//             size={28}
//             weight="bold"
//             animationSpec={{
//               effect: {
//                 type: "pulse",
//               },
//               repeating: true,
//             }}
//             color={AC.secondaryLabel}
//           />
//         }
//         subtitle="Evan Bacon"
//       />

//       <View
//         style={{
//           backgroundColor: AC.separator,
//           width: 0.5,
//           maxHeight: "50%",
//           minHeight: "50%",
//           marginVertical: "auto",
//         }}
//       />

//       <HorizontalItem title="Version" badge="3.6" subtitle="Build 250" />
//     </>
//   );
// }

// function HorizontalItem({
//   title,
//   badge,
//   subtitle,
// }: {
//   title: string;
//   badge: React.ReactNode;
//   subtitle: string;
// }) {
//   return (
//     <View style={{ alignItems: "center", gap: 4, flex: 1 }}>
//       <Form.Text
//         style={{
//           textTransform: "uppercase",
//           fontSize: 10,
//           fontWeight: "600",
//           color: AC.secondaryLabel,
//         }}
//       >
//         {title}
//       </Form.Text>
//       {typeof badge === "string" ? (
//         <Form.Text
//           style={{
//             fontSize: 20,
//             fontWeight: "bold",
//             color: AC.secondaryLabel,
//           }}
//         >
//           {badge}
//         </Form.Text>
//       ) : (
//         badge
//       )}

//       <Form.Text
//         style={{
//           fontSize: 12,
//           color: AC.secondaryLabel,
//         }}
//       >
//         {subtitle}
//       </Form.Text>
//     </View>
//   );
// }

//===============================================

// 1° Versão \\
//===========\\
// import React, { useEffect, useState } from "react";
// import * as Form from "@/components/ui/Form"
// import * as AC from "@bacons/apple-colors";
// import { StyleSheet, TextInput, View } from "react-native";
// import { IconSymbol } from "@/components/ui/IconSymbol";
// import { useColorScheme } from "react-native";
 
// export default function Page() {
//   const colorScheme = useColorScheme();// Nota: <= biblioteca de cores usada pela apple
  
//   const [post, setPosts] = useState([]);


//   useEffect(() => {
//     fetchPost();
//   },[]);
  

//   // Função para pegar os objetos do vetor da pasta ("/api/post")
//   async function fetchPost() {
//     const response = await fetch("/api/post");
//     const data = await response.json();
//     setPosts(data);
//   }



//   return(
//     <View style={{ flex: 1 }}>
//       <Form.List navigationTitle="Home">
//         {/*navigationTitle="Home" <= são Propt para texto do (import * as Form from "@/components/ui/Form")  */}
//           <Form.Section title="Create Post" footer="Create a post to share with your friends">
//             <Form.HStack>
//               <TextInput placeholder="What's on ypur mind?" style={{
//                 flexGrow:1,
//                 maxWidth: "80%",
//                 borderWidth: 1,
//                 borderColor: AC.separator,
//                 borderRadius: 12,
//                 padding: 8,
//                 color: colorScheme === "dark" ? "white" : "black",
//               }}/>
//               <Form.Link href={"/(info)"}>
//                 {/*@ts-ignore */}
//                 <IconSymbol name="sparkle" color={AC.systemOrange}/>
//               </Form.Link>
//             </Form.HStack>
//           </Form.Section>
//             {/*Criando um post */}
//           <Form.Section title="Recent Post">
//             {/*dummyPost.map => percorre todos os itens do vetor (const dummyPost = []) */}
//             {dummyPost.map((post) => (
//               <Form.Link 
//               key={post.id}/*key={post.id} => busco o Objeto dentro do vetor pelo (id) */
//               href={"/two"} 
//               systemImage={post.isLiked ? "heart.fill" : "heart"}
//               style={{
//                 overflow:"hidden",
//                 flexShrink:1,
//               }}
//               >
//                 {post.text}
//             </Form.Link>
//             ))}
//           </Form.Section>

//       </Form.List>
//     </View>
//   ); 
// }

// // Criando um Vetor com Objeto
// const dummyPost = [
//   {
//     id:1,
//     text: "Just launcher my new app!!",
//     isLiked: false,
//   },
//   {
//     id:2,
//     text: "Working on some new UI designs today.",
//     isLiked: true,
//   },
//   {
//     id:3,
//     text: "Morning run complete!!",
//     isLiked: true,
//   },
// ];


//===============================================

// 2° Versão \\
//===========\\

import React, { useEffect, useState } from "react";
import * as Form from "@/components/ui/Form"
import * as AC from "@bacons/apple-colors";
import { StyleSheet, TextInput, View } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "react-native";
 
export default function Page() {
  const colorScheme = useColorScheme();// Nota: <= biblioteca de cores usada pela apple
  
  const [posts, setPosts] = useState<any[]>([]);


  useEffect(() => {
    fetchPost();
  },[]);
  

  // Função para pegar os objetos do vetor da pasta ("/api/post")
  async function fetchPost() {
    const response = await fetch("/api/post");
    const data = await response.json();
    setPosts(data);
  }



  return(
    <View style={{ flex: 1 }}>
      <Form.List navigationTitle="Home">
        {/*navigationTitle="Home" <= são Propt para texto do (import * as Form from "@/components/ui/Form")  */}
          <Form.Section title="Create Post" footer="Create a post to share with your friends">
            <Form.HStack>
              <TextInput placeholder="What's on ypur mind?" style={{
                flexGrow:1,
                maxWidth: "80%",
                borderWidth: 1,
                borderColor: AC.separator,
                borderRadius: 12,
                padding: 8,
                color: colorScheme === "dark" ? "white" : "black",
              }}/>
              <Form.Link href={"/(info)"}>
                {/*@ts-ignore */}
                <IconSymbol name="sparkle" color={AC.systemOrange}/>
              </Form.Link>
            </Form.HStack>
          </Form.Section>
            {/*Criando um post */}
          <Form.Section title="Recent Post">
            {/*dummyPost.map => percorre todos os itens do vetor (const dummyPost = []) */}
            {posts.map((post) => (
              <Form.Link 
              key={post.id}/*key={post.id} => busco o Objeto dentro do vetor pelo (id) */
              href={"/two"} 
              systemImage={post.isLiked ? "heart.fill" : "heart"}
              style={{
                overflow:"hidden",
                flexShrink:1,
              }}
              >
                {post.text}
            </Form.Link>
            ))}
          </Form.Section>

      </Form.List>
    </View>
  ); 
}






/*
 NOTA: O Vetor (const dummyPost) é para simular um banco de dados onde:
=> o Vetor dummyPost = [] é uma Tabela;
=> e os Objetos {},{},{}, são os conteúdos dessa Tabela;

*/  

/*
 DESCRIÇÃO da const dummyPost = [{},{},{},]:

=> Vetor é identificado por [colchetes] 
>> const dummyPost = [] 

=> Objeto é identificado por {chaves}: 
>> {
    id;1,
    text: "Just launcher my new app!!",
    isLiked: false,
    },

 */

//##################################################################

/*
 fORMAS DIFERENTES PARA CONSTRUIR (Const dummyPost = [{},{},{},]):

1°) FORMA: Usando (Array.of)
=> const dummyPost = Array.of(
  { id: 1, text: "Just launched my new app!!", isLiked: false },
  { id: 2, text: "Working on some new UI designs today.", isLiked: true },
  { id: 3, text: "Morning run complete!!", isLiked: true }
);

2°) FORMA: Usando (Array e push)
=> const dummyPost: Array<{ id: number; text: string; isLiked: boolean }> = [];
    dummyPost.push({ id: 1, text: "Just launched my new app!!", isLiked: false });
    dummyPost.push({ id: 2, text: "Working on some new UI designs today.", isLiked: true });
    dummyPost.push({ id: 3, text: "Morning run complete!!", isLiked: true });

3°) FORMA: Usando (map) 
=> const postData = [
  { id: 1, text: "Just launched my new app!!", isLiked: false },
  { id: 2, text: "Working on some new UI designs today.", isLiked: true },
  { id: 3, text: "Morning run complete!!", isLiked: true },
];

const dummyPost = postData.map(post => ({
  id: post.id,
  text: post.text,
  isLiked: post.isLiked,
}));  

*/

/*
 OUTRA FORMAS DE CONSTRUÇÃO DE VETORES:
 
1°) FORMA: Vetor que armazena Numeros
=> const numeros = [1, 2, 3.5, 4, 5];

2°) FORMA: Vetor que armazena Strings
=> const frutas = ["maçã", "banana", "laranja"];

3°) FORMA: Vetor que armazena valores Booleanos
=> const estados = [true, false, true];

4°) FORMA: Vetor que armazena Funções
=> const funcoes = [
  function() { return "Olá"; },
  () => "Mundo"
];

5°) FORMA: Vetor que armazena outro Vetor o que (criar uma estruturas de dados multidimensionais.)
=> const matriz = [[1, 2], [3, 4], [5, 6]];

6°) FORMA: Vetor que armaena explicitamente um valor (null)
=> const valores = [1, null, 3];

7°) FORMA: Vetor que armazena (objetos literais simples.)
=> const pessoas = [{ nome: "Alice" }, { nome: "Bob" }];

8°) FORMA: Vetor Heterogêneo que armazena varios tipos
=> const misto = [42, "texto", true, null, [1, 2, 3], function() { return "função"; }];

*/

/*
OPERAÇÕES utilizando Vetores:

1°) Manipulação de Dados:
>> Adição e Remoção: Você pode adicionar ou remover elementos de um vetor dinamicamente;

=> let frutas = ["maçã", "banana"];
frutas.push("laranja"); // Adiciona "laranja"
frutas.pop(); // Remove o último elemento 


2°) Ordenação:
>> Os vetores podem ser ordenados de diferentes maneiras, utilizando métodos de ordenação.

=> let numeros = [5, 3, 8, 1];
numeros.sort(); // Ordena em ordem crescente

3°) Busca:
>> Implementação de algoritmos de busca, como busca linear ou busca binária, para encontrar elementos em um vetor.

=> function buscaLinear(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) return i;
    }
    return -1; // Não encontrado
}

4°) Representação de Estruturas Complexas:
>> Vetores podem ser usados para representar matrizes, listas encadeadas e até grafos.

=> let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


5°) Cálculos Matemáticos:
>> Utilizados em operações matemáticas, como soma de vetores, multiplicação escalar e cálculo de média.

=> function somaVetores(vetor1, vetor2) {
    return vetor1.map((num, index) => num + vetor2[index]);
}


6º) Análise Estatística:
>> Cálculo de estatísticas, como média, mediana e desvio padrão, utilizando os elementos de um vetor.
 
=> function media(vetor) {
    const soma = vetor.reduce((acc, val) => acc + val, 0);
    return soma / vetor.length;
}


7°) Transformações de Dados:
>> Aplicação de funções a cada elemento de um vetor, como map, filter e reduce.

=> let quadrados = numeros.map(num => num * num); // Eleva cada número ao quadrado

8°) Simulações e Modelagem:
>> Utilizados em simulações, como simulações de Monte Carlo, onde vetores representam estados ou resultados possíveis.

>> O que é  um VETOR com simulações de Monte Carlo:

=> Os vetores são fundamentais em simulações de Monte Carlo, pois permitem armazenar e manipular grandes conjuntos de dados aleatórios. 
Por exemplo, em simulações para estimar o valor de π, vetores podem ser usados para representar coordenadas de pontos gerados aleatoriamente dentro de um quadrado. 
Esses pontos são então comparados com a área de um círculo inscrito para calcular a proporção de pontos que caem dentro do círculo em relação ao total de pontos gerados.

Exemplo de Simulação de Monte Carlo para Estimar π:

   >> Objetivo: Estimar o valor de π usando o método de Monte Carlo.

    Passos:
       -> Gerar um número grande de pontos aleatórios dentro de um quadrado de lado 2 (com centro na origem).
       -> Contar quantos desses pontos caem dentro de um círculo de raio 1 (também centrado na origem).
       -> A proporção de pontos dentro do círculo em relação ao total de pontos gerados, multiplicada por 4, fornece uma estimativa de π.

=> set.seed(123)  # Para reprodutibilidade
n <- 10000  # Número de pontos
x <- runif(n, -1, 1)  # Coordenadas x
y <- runif(n, -1, 1)  # Coordenadas y

# Calcular a distância do ponto à origem
inside_circle <- (x^2 + y^2) <= 1
pi_estimate <- 4 * sum(inside_circle) / n

pi_estimate






*/