import { StyleSheet,Image} from 'react-native'
import React from 'react'
import { googleApi } from '../firebase/googleApi'
import { colors } from '../Global/colors'

const MapPreview = ({latitude,longitude}) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
    &zoom=15
    &size=700x300
    &maptype=roadmap
    &markers=color:green%7Clabel:C%7C${latitude},${longitude}
    &key=${googleApi.mapStatic}`

  return (
    <Image source={latitude ? {uri:mapPreviewUrl} : require("../../assets/map.jpg")} style={styles.image}/>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300,   
        borderWidth:2,
        borderColor:colors.oscuro,
        borderRadius: 10
    }
})