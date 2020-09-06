import metrics from './metrics';
import colors from './colors';
import { responsiveFontSize, responsiveWidth, responsiveHeight, Platform } from "./responsive"
import {  PixelRatio } from "react-native";
const type = {
  base: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic',
};

const size = {
  extraLarge: responsiveFontSize(4.5),
  strong: responsiveFontSize(3),
  large: responsiveFontSize(4),
  heading: responsiveFontSize(2.2),
  // regular: responsiveFontSize(2), 
  regular: PixelRatio.get() === 2 ? 28/PixelRatio.getFontScale() :  14/PixelRatio.getFontScale(),
  normal:responsiveFontSize(1.7),
  medium: responsiveFontSize(1.5),
  small: responsiveFontSize(0.5),
  tiny: responsiveFontSize(0.2),
  font_10: responsiveFontSize(1.37),
  font_12:responsiveFontSize(1.76),
  font_13:responsiveFontSize(1.78),
  font_14: responsiveFontSize(1.91), 
  font_15: responsiveFontSize(2.05 ),
  font_16: responsiveFontSize(2.18),
  font_18: responsiveFontSize(2.46),
  font_24: responsiveFontSize(3.27),
  font_26: responsiveFontSize(3.55),
  font_28: responsiveFontSize(3.82),
  font_31: responsiveFontSize(4.23), 
};

const fontWeight = {
  normal: 'normal',
  regular: 'regular',
  bold: 'bold',
  f100: '100',
  f200: '200',
};

const style = {

  // styles for the text
  // h1: {
  //   fontFamily: type.base,
  //   fontSize: size.h1,
  // },
  // h2: {
  //   fontSize: size.h2,
  //   fontFamily: type.base,
  // }
};

export default {
  type,
  size,
  style,
  fontWeight,
};
