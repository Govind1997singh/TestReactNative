import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Img } from "./Images";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const Feed = ({ navigation }) => {

   // ref
   const bottomSheetRef = useRef<BottomSheet>(null);

   // callbacks
   const handleSheetChanges = useCallback((index: number) => {
     console.log('handleSheetChanges', index);
   }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5", padding: 10 }}>
      <GestureHandlerRootView >
      {/* Header */}
      <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Img.myProfile} style={{ width: 40, height: 40, borderRadius: 20 }} />
          <TextInput
            placeholder="Start a post"
            placeholderTextColor={"#262626"}
            style={{ flex: 1, marginLeft: 10, padding: 8, backgroundColor: "#fff", borderRadius: 20, borderWidth: 0.8, borderColor: 'gray' }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate("Details")}>
            <Image source={Img.video} resizeMode="contain" style={{ width: 22, height: 19, marginRight: 5 }} />
            <Text style={{ fontSize: 12 }}>Video</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Details")} style={{ flexDirection: 'row' }}>
            <Image source={Img.photo} resizeMode="contain" style={{ width: 22, height: 19, marginRight: 5 }} />
            <Text style={{ fontSize: 12 }}>Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Details")} style={{ flexDirection: 'row' }}>
            <Image source={Img.artical} resizeMode="contain" style={{ width: 22, height: 19, marginRight: 5 }} />
            <Text style={{ fontSize: 12 }}>Write Artical</Text>
          </TouchableOpacity>
        </View>


      </View>
      {/* Post Section */}

      <View style={{ backgroundColor: "#fff", marginTop: 10, padding: 10, borderRadius: 10 }}>

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>

            <Image source={Img.harshProfile} style={{ width: 18, height: 18, borderRadius: 11 }} />

            <Text style={{ fontWeight: "bold", marginLeft: 5, fontSize: 12 }}>Harsh Siddhapura</Text>
            <Text style={{ marginLeft: 2, fontSize: 10, color: 'gray' }}>Commented on this post</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={Img.menu} resizeMode="contain" style={{ width: 25, height: 22 }} />
            <Text>x</Text>
          </View>
        </View>

        <View style={styles.line}></View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginTop: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={Img.sanyasiProfile} style={{ width: 40, height: 40, borderRadius: 20 }} />
            <View style={{ marginLeft: 10, width: "75%" }}>
              <Text style={{ fontWeight: "bold" }}>Sanyasi Rao Alabani</Text>
              <Text style={{ color: "gray", fontSize: 10, }} numberOfLines={1}>React Native Developer | Softwarew Engineer at MicroGrip Inc. | Building.</Text>
              <Text style={{ color: "gray", fontSize: 10, }}>1d. </Text>

            </View>
          </View>
          <Text style={{ ...styles.blueLink, position: 'absolute', right: 0, top: 0 }}>+ Follow</Text>
        </View>
        <Text style={{ marginTop: 10 }} numberOfLines={3}>
          I recently hit the three-year mark at MicroGrid Inc. as a React Native Developer! This journey has been a thrillong ride of building cuttting-edge mobile applications, solving complex challenges, and delivering seamlessuser experiences, From....
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginTop: 5 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
      
        <Image source={Img.like} resizeMode="contain" style={{ width: 15, height: 15 }} />
            
            <Text style={{ fontSize: 11, color: 'gray' }}> 
              
                Harsh siddhapura and 14 othrs</Text>
                </View>
          <Text style={{ fontSize: 11, color: 'gray' }}>6 Comments</Text>
        </View>
        <View style={styles.line}></View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Image source={Img.like} resizeMode="contain" style={{ width: 22, height: 22 }} />
            <Text>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Image source={Img.comment} resizeMode="contain" style={{ width: 22, height: 22 }} />
            <Text>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Image source={Img.repost} resizeMode="contain" style={{ width: 22, height: 22 }} />
            <Text>Repost</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Image source={Img.send} resizeMode="contain" style={{ width: 22, height: 22 }} />
            <Text>Send</Text>
          </TouchableOpacity>
        </View>


        {/* Comment Section */}
        <View style={{ flexDirection: "row", alignItems: "flex-start", marginTop: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Image source={Img.harshProfile} style={{ width: 32, height: 32, borderRadius: 20 }} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Harsh Siddhapura <Text style={{ fontWeight: '100', fontSize: 11, color: 'gray' }}>. 1st</Text></Text>
              <Text style={{ color: "gray" }}>Jr. React Native Developer</Text>

              <Text style={{ marginTop: 10 }}>
                I'm interested <Text style={styles.blueLink}>#reactnative</Text> developer{`\n`}
                Email: <Text style={styles.blueLink}> harshsiddhapura5557@gmail.com</Text>{`\n`}
                Mobile: 9714475575
              </Text>
              <Text style={{ color: "gray", fontSize: 12 }}>Like | Reply</Text>

            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", position: 'absolute', right: 0, top: 0 }}>
            <Text>1h </Text>

            <Image source={Img.menu} resizeMode="contain" style={{ width: 25, height: 22 }} />
          </View>

        </View>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 8 }}>
          <Image source={Img.loadMore} resizeMode="contain" style={{ width: 22, height: 22, marginRight: 7 }} />
          <Text style={{fontFamily:"HelveticaNeueBold"}}>Load more comments</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
      </GestureHandlerRootView>
    </ScrollView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  blueLink: {
    color: "#0099ff"
  },
  line: {
    height: 0.5,
    width: "100%",
    backgroundColor: '#b3b3b3',
    marginTop: 5,
    marginBottom: 5
  }
})