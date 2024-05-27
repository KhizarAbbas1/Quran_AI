import React, { Component, useState } from 'react';
import { View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons } from '../../../services';
import { useHooks } from './hooks';
export default function Index(props) {
    const { navigate } = props.navigation

    const { toggleCheckbox, isChecked, email, setEmail, password, setPassword, togglePasswordVisibility, showPassword, name, setName, confirmPassword, setConfirmPassword, toggleConfirmPasswordVisibility, showConfirmPassword } = useHooks()
    return (
        <Wrapper isMain background1 style={[{}]}>
            <ScrollViews.KeyboardAvoiding>
                <Wrapper>
                    <StatusBars.Light />
                    <Wrapper isCenter paddingHorizontalLarge paddingVerticalLarge style={{ marginTop: width(15), }}>
                        <Text isSmallTitle style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1 }}>Create an Account</Text>
                        <Text isTiny style={{ marginTop: width(1.5), fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}>Please enter your details</Text>
                    </Wrapper>
                    <Wrapper marginVerticalSmall paddingHorizontalSmall>
                        <TextInputs.Colored title={'Full Name'}
                            value={name}
                            onChangeText={(text) => setName(text)}
                            keyboardType={'email-address'}
                            inputContainerStyle={{ borderColor: colors.inputTextBorder,borderRadius: width(10) }}
                            containerStyle={{ marginTop: height(2) }} 
                            inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
                            placeholder={'Type your name here...'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />
                        <TextInputs.Colored title={'Email Address'}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType={'email-address'}
                            inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }}
                            containerStyle={{ marginTop: height(2) }}
                            customIconLeft={appIcons.mail}
                            iconSizeLeft={sizes.icons.mediumTiny}
                            inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
                            iconColorLeft={colors.iconColor}
                            iconStyleLeft={{ marginLeft: width(0.7) }}
                            placeholder={'example@email.com'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />

                        <TextInputs.Colored title={'Password'}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            keyboardType={'default'}
                            secureTextEntry={!showPassword}
                            onPressIconRight={togglePasswordVisibility}
                            inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }}
                            containerStyle={{ marginTop: height(2) }}
                            customIconLeft={appIcons.lock}
                            iconSizeLeft={sizes.icons.mediumTiny}
                            inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
                            iconColorLeft={colors.iconColor}
                            iconStyleLeft={{ marginLeft: width(0.7) }}
                            placeholder={'Minimum 8 charachers'}
                            placeholderTextColor={colors.placeHolderColor}
                            customIconRight={appIcons.eye} iconSizeRight={sizes.icons.mediumTiny}
                            iconStyleRight={{ marginRight: width(4) }} titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />

                        <TextInputs.Colored title={'Confirm Password'}
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                            keyboardType={'default'}
                            secureTextEntry={!showConfirmPassword}
                            onPressIconRight={toggleConfirmPasswordVisibility}
                            inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }}
                            containerStyle={{ marginTop: height(2) }}
                            customIconLeft={appIcons.lock}
                            iconSizeLeft={sizes.icons.mediumTiny}
                            inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
                            iconColorLeft={colors.iconColor}
                            iconStyleLeft={{ marginLeft: width(0.7) }}
                            placeholder={'Minimum 8 charachers'}
                            placeholderTextColor={colors.placeHolderColor}
                            customIconRight={appIcons.eye} iconSizeRight={sizes.icons.mediumTiny}
                            iconStyleRight={{ marginRight: width(4) }} titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />

                        <Wrapper flexDirectionRow alignItemsCenter marginHorizontalBase justifyContentSpaceBetween marginVerticalSmall>
                            <CheckBoxes.Primary onPress={toggleCheckbox} text={'Accept Terms & Conditions'} textStyle={{ fontSize: fontSizes.tiny, color: colors.appTextColor1 }} checked={isChecked} uncheckedIconColor={colors.iconColor2} checkedIconColor={colors.iconColor2} checkIconsize={sizes.icons.mediumTiny} />
                        </Wrapper>
                        <Wrapper marginVerticalLarge style={{ marginHorizontal: width(15) }} >
                            <Buttons.Colored buttonColor={colors.buttonColor1} buttonStyle={{ height: height(8) }} onPress={() => {navigate(routes.app)}} text={'Create Account'} textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular }} />
                        </Wrapper>
                        <Wrapper marginVerticalLarge >
                            <Text isTiny style={{ fontFamily: appFonts.appTextRegular, textAlign: 'center', color: colors.appTextColor1 }}>Already have an account?</Text>
                            <Wrapper marginVerticalTiny style={{ marginHorizontal: width(15) }} >
                                <Buttons.Colored buttonColor={colors.buttonColor2} buttonStyle={{ height: height(8) }} text={'Login to your account'} onPress={() => { navigate(routes.signin) }} textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor1 }} />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>

            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}

