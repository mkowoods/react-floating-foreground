import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView, Dimensions } from 'react-native';

console.disableYellowBox = true;


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const BACKGROUND_IMAGE = require('./images/backgroundimage.jpg');

const OVERLAY_IMAGES = [
  {img: require('./images/sample1.png'), width: 602, height: 903}, 
  {img: require('./images/sample2.png'), width: 374, height: 600},
  {img: require('./images/sample3.png'), width: 1024, height: 1878}, 
  {img: require('./images/sample4.png'), width: 480, height: 1057}
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BACKGROUND_IMAGE}
          style={{width: null, height: null, flex: 1, alignItems: 'center', justifyContent: 'center'}}
        >
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
        >
          {OVERLAY_IMAGES.map((img) => {
              let height = 300;
              let width = (img.width / img.height) * height;
              return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '5%', paddingBottom: '10%', width: SCREEN_WIDTH}}>
                  <Image  
                    source={img.img} 
                    style={{ height, width}}
                  />
                  <Text
                    style={{backgroundColor: "#fff", width: "90%", borderColor: "#000", borderWidth: 1, borderRadius: 10, padding: 20, marginTop: 0}}
                  >
                  Some Sample Text
                  </Text>
                  <View style={{width: "90%",  height: 40, backgroundColor: "#fff", borderColor: "#000", borderWidth: "1", borderRadius: 10, marginTop: 150}}>
                    <Button 
                        title="Test!!"
                        color="#841584"
                    />        
                  </View>
                </View>  
              )
          }
        )}
        </ScrollView>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
