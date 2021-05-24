import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    SvgUri,
  } from 'react-native-svg';


const Img1 = () => {
    return(
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="green"
                />
                <Rect
                    
                    y="15"
                    width="70"
                    height="70"
                    stroke="red"
                    strokeWidth="2"
                    fill="yellow"
                    x="15"
                />
            </Svg>
    )
}

const Img2 = () => {
    return(
        <SvgUri
            width='100%'
            height='100%'
            uri='https://svgsilh.com/svg/2684022.svg'
        />
    )
}

const Airan = () => {
    return (
        <View>
            <Img2/>


        </View>
    )
}

export default Airan

const styles = StyleSheet.create({})
