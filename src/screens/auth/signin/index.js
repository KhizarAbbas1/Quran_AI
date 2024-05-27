import React, { Component } from 'react';
// import { View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, StatusBars, Images, CheckBoxes, Modals, } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appImages, appFonts, colors, appIcons, fontSizes } from '../../../services';
import { Button, Image } from 'react-native';
import { useHooks } from './hooks';
export default function Index(props) {
  const { navigate } = props.navigation

  const { toggleCheckbox, isChecked, email,setEmail ,password, setPassword, togglePasswordVisibility, showPassword,  modalVisibility, modalVisible } = useHooks()
  return (
    <Wrapper isMain background1 style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
          <StatusBars.Dark />
        <Wrapper>
          {/* <StatusBars.Light /> */}
          <Wrapper  flexDirectionRow justifyContentCenter alignItemsCenter style={{marginTop: width(20), }}>
            <Image source={appImages.book} style={{ height: height(10), width: width(20), }} />
            <Text style={{fontFamily: appFonts.appTextBold, color:colors.appTextColor3, fontSize: totalSize(6), marginLeft: width(3)}}>Quran AI</Text>
          </Wrapper>
          <Wrapper isCenter paddingHorizontalLarge paddingVerticalLarge style={{ marginTop: height(3)}}>
            <Text isSmallTitle style={{fontFamily: appFonts.appTextBold, color:colors.appTextColor1}}>Login to your account</Text>
            <Text isTiny style={{ marginTop: width(1.5),fontFamily: appFonts.appTextRegular, color:colors.appTextColor1 }}>Please enter your details</Text>
          </Wrapper>
          <Wrapper marginVerticalSmall paddingHorizontalSmall>
            <TextInputs.Colored title={'Email Address'} value={email} onChangeText={(text) => setEmail(text)} keyboardType={'email-address'} inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }} customIconLeft={appIcons.mail} iconSizeLeft={sizes.icons.mediumTiny} inputStyle={{fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color:colors.appTextColor1}}
              iconColorLeft={colors.iconColor} iconStyleLeft={{ marginLeft: width(0.7) }} placeholder={'example@email.com'} placeholderTextColor={colors.placeHolderColor} titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color:colors.appTextColor1 }} />
            <TextInputs.Colored title={'Password'} value={password} onChangeText={(text) => setPassword(text)} keyboardType={'default'} secureTextEntry={!showPassword} onPressIconRight={togglePasswordVisibility} inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }} containerStyle={{ marginTop: height(2) }} customIconLeft={appIcons.lock} iconSizeLeft={sizes.icons.mediumTiny} inputStyle={{fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color:colors.appTextColor1}}
              iconColorLeft={colors.iconColor} iconStyleLeft={{ marginLeft: width(0.7) }} placeholder={'Minimum 8 charachers'} placeholderTextColor={colors.placeHolderColor} customIconRight={appIcons.eye} iconSizeRight={sizes.icons.mediumTiny} iconStyleRight={{ marginRight: width(4) }} titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4),color:colors.appTextColor1 }} />
            <Wrapper flexDirectionRow alignItemsCenter marginHorizontalBase justifyContentSpaceBetween marginVerticalSmall>
              <CheckBoxes.Primary onPress={toggleCheckbox} text={'Remember Me'} textStyle={{ fontSize: fontSizes.tiny, color: colors.appTextColor1 }} checked={isChecked} uncheckedIconColor={colors.iconColor2} checkedIconColor={colors.iconColor2} checkIconsize={sizes.icons.mediumTiny} />
              <Buttons.ColoredSmall text={'Forgot Password?'} onPress={modalVisibility} buttonStyle={{ backgroundColor: colors.transparent, marginRight: responsiveWidth(-5) }} textStyle={{ color: colors.appTextColor8, fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular }} />
            </Wrapper>
          </Wrapper>
          <Wrapper marginVerticalMedium style={{ marginHorizontal: width(15)}} >
            <Buttons.Colored buttonColor={colors.buttonColor1} onPress={() => {navigate(routes.app)}} buttonStyle={{ height: height(8) }} text={'Login'} customIconRight={appIcons.logIn} textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular }} />
          </Wrapper>
          <Wrapper isCenter>
            <Text isTiny style={{ fontFamily: appFonts.appTextRegular, color:colors.appTextColor1 }}>Or continue with</Text>
            <Wrapper marginVerticalSmall flexDirectionRow alignItemsCenter justifyContentCenter >
              <Buttons.Bordered buttonColor={colors.buttonColor1} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), borderColor: colors.buttonBorder1 }} text={'Google'} iconName={'google'} iconType={'material-community'} textStyle={{ color: colors.appTextColor1, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
              <Buttons.Bordered buttonColor={colors.buttonColor1} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), borderColor: colors.buttonBorder1 }} text={'Facebook'} iconName={'facebook'} iconType={'material-community'} textStyle={{ color: colors.appTextColor1, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
            </Wrapper>
          </Wrapper>
          <Wrapper marginVerticalLarge >
            <Text isTiny style={{ fontFamily: appFonts.appTextRegular, textAlign: 'center', color:colors.appTextColor1 }}>Don’t have an account?</Text>
            <Wrapper marginVerticalSmall style={{ marginHorizontal: width(15)}} >
              <Buttons.Colored buttonColor={colors.buttonColor2} buttonStyle={{ height: height(8) }} text={'Create an Account'} onPress={() => {navigate(routes.createAccount)}} textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color:colors.appTextColor1}} />
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Modals.Swipable hideHeader visible={modalVisible} hideContent2={true} toggle={modalVisibility} disableBackdropPress={false}  />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

