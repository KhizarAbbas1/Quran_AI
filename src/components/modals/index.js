import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes, FlatList, Platform, ImageBackground } from 'react-native'
import { Icon } from '@rneui/base';
import { navigate } from  "../../navigation/rootNavigation"
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes, appStyles, useKeyboardStatus, appIcons, appFonts, fontSizes, responsiveHeight, routes } from '../../services';
import Modal from 'react-native-modal'
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';
import * as Icons from '../icons';
import * as Buttons from '../buttons';
import * as ScrollViews from '../scrollViews';
import * as TextInputs from '../textInput'
import LinearGradient from 'react-native-linear-gradient';
import CommonNavigation from '../../navigation/common';
import { screensEnabled } from 'react-native-screens';
import { Modals } from '..';


// export const Swipable = ({ children, title, isVisible, toggleModal, footerFlex, headerFlex }) => {
//     return (
//         <Modal
//             isVisible={isVisible}
//             swipeDirection="down"
//             onSwipeComplete={toggleModal}
//             style={{ margin: 0 }}
//             // backdropOpacity={0}
//             onBackdropPress={toggleModal}
//         >
//             <Wrapper flex={1}>
//                 <Wrapper flex={headerFlex ? headerFlex : 1.5} />
//                 <Wrapper flex={footerFlex ? footerFlex : 8.5} style={[styles.swipableModalFooter]}>
//                     {children}
//                     <Wrapper style={[styles.barContainer]}>
//                         <Wrapper style={[appStyles.center]}>
//                             <TouchableOpacity onPress={toggleModal}>
//                                 <Lines.Horizontal
//                                     height={4}
//                                     width={width(15)}
//                                     style={{ borderRadius: 5 }}
//                                     color={colors.appBgColor3}
//                                 />
//                             </TouchableOpacity>
//                             <Spacer isBasic />
//                             <Text isTinyTitle>{title}</Text>
//                         </Wrapper>
//                     </Wrapper>
//                     <Wrapper isAbsolute style={[{ top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal }]}>
//                         <Icon
//                             name="close"
//                         />
//                     </Wrapper>
//                 </Wrapper>
//             </Wrapper>
//         </Modal>
//     );
// }
export const Swipable = ({
    visible, toggle, disableSwipe, disableBackdropPress, topMargin, headerTitle, data, value, setValue, visibleLogout, toggleLogout,
    headerRight, headerLeft, hideHeader, children, backdropOpacity, backdropColor, containerStyle, hideContent, hideContent2,hideContent3, props}) => {

    // manage keyboard
    const keyboardVisible = useKeyboardStatus()
    // const { navigate } = props.navigation

    const defaultTopMargin = keyboardVisible ? height(12) : topMargin ? (Platform.OS === 'ios' ? topMargin : topMargin + height(5)) : height(12)
    return (
        // <Wrapper isMain background1 style={[{}]}>

        <Modal
            isVisible={visible} // Comment on video User
            style={{ margin: 0 }}
            onSwipeComplete={toggle}
            swipeDirection={disableSwipe ? null : "down"}
            propagateSwipe
            onBackdropPress={disableBackdropPress ? null : toggle}
            backdropOpacity={backdropOpacity ? backdropOpacity : 0}
            backdropColor={backdropColor && backdropColor}

        >
            <Wrapper flex={1} >

                {/* <LinearGradient style={{ flex: 1 }}
                colors={['#00000000', '#000000']}
            > */}
                {/* <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                    <LinearGradient style={{ flex: 1 }}
                        colors={['#00000000', '#000000BF']}
                    />
                </TouchableOpacity> */}

                <Wrapper flex={1} justifyContentFlexend={!keyboardVisible} >
                    <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                        <LinearGradient style={{ flex: 1 }}
                            colors={['#00000000', '#000000BF']}
                        />
                    </TouchableOpacity>
                    <Wrapper
                        paddingVerticalLarge
                        style={[{
                            //flex: 1,
                            marginTop: defaultTopMargin,
                            backgroundColor: colors.appBgColor1,
                            borderTopRightRadius: 25,
                            borderTopLeftRadius: 25,

                            //...appStyles.shadowExtraDark
                        }, containerStyle]}>
                        {
                            hideHeader ? null :
                                <Wrapper style={appStyles.rowCompContainer}>
                                    <Wrapper style={{ alignItems: 'center', right: 0, left: 0 }}>
                                        <Text isTinyTitle style={[appStyles.headerTitleStyle]}>
                                            {/* {data ? data.length + ' People' : 0 + ' People'} */}
                                            {headerTitle ? headerTitle : 'Title'}
                                        </Text>
                                    </Wrapper>
                                    <Wrapper>
                                        {
                                            headerLeft ? headerLeft :
                                                // <BackIcon
                                                //     onPress={toggle}
                                                //     color={colors.appTextColor6}
                                                // />
                                                <Icon
                                                    name="x"
                                                    type="feather"
                                                    size={totalSize(2.5)}
                                                    color={colors.appTextColor1}
                                                    onPress={toggle}
                                                />
                                        }
                                    </Wrapper>

                                    <Wrapper style={{}}>
                                        {headerRight}
                                    </Wrapper>
                                </Wrapper>
                        }
                        {children}
                        {!hideContent && (
                            <ScrollViews.KeyboardAvoiding>
                                {/* <Wrapper> */}
                                <Wrapper isCenter paddingHorizontalLarge>
                                    <Text isTinyTitle style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1 }}>Reset Password</Text>
                                    <Text isSmall style={{ textAlign: 'center', marginTop: height(5), fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}>Enter you registered email address to receive a{'\n'}password reset link.</Text>
                                </Wrapper>
                                <Wrapper paddingHorizontalSmall style={{ marginTop: height(5) }} >
                                    <TextInputs.Colored title={'Email Address'} keyboardType={'email-address'} inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }} customIconLeft={appIcons.mail} iconSizeLeft={sizes.icons.mediumTiny} inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
                                        iconColorLeft={colors.iconColor} iconStyleLeft={{ marginLeft: width(0.7) }} placeholder={'example@email.com'} placeholderTextColor={colors.placeHolderColor} titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />
                                </Wrapper>
                                <Wrapper paddingVerticalLarge style={{ marginHorizontal: width(15) }} >
                                    <Buttons.Colored buttonColor={colors.buttonColor1} buttonStyle={{ height: height(8) }} text={'Send Link'} textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular }} />
                                </Wrapper>
                                {/* </Wrapper> */}
                            </ScrollViews.KeyboardAvoiding>
                        )}
                        {!hideContent2 && (
                            <>
                                <Wrapper isCenter paddingHorizontalLarge paddingVerticalSmall>
                                    <Text isTinyTitle style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1 }}>Profile Options</Text>
                                </Wrapper>
                                <Wrapper marginVerticalMedium  >
                                    <Wrapper style={{marginBottom:height(0.5)}} >
                                        <Buttons.Custom buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
                                            text={'Edit Profile'} customIconLeft={appIcons.edit} hideContent4={true} flex={7}
                                            customIconRight={appIcons.chevron_right} tintColor={colors.iconColor4}
                                            onPress={() => {navigate(routes.editProfile)}}
                                            textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.small, }}
                                            iconStyle={{ alignSelf: 'center', }} />
                                    </Wrapper>
                                    <Wrapper style={{marginBottom:height(0.5)}}>
                                        <Buttons.Custom data={data} buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
                                            text={'Font Size'} customIconLeft={appIcons.format_size} hideContent3={true} 
                                            customIconRight={appIcons.chevron_right} tintColor={colors.iconColor4} flex={5} setValue={setValue} value={value}
                                            textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, }}
                                            iconStyle={{ alignSelf: 'center', }} disabled={true}/>
                                    </Wrapper>
                                    <Wrapper style={{marginBottom:height(0.5)}}>
                                        <Buttons.Custom buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
                                            text={'How to Use'} customIconLeft={appIcons.info} hideContent4={true} flex={6}
                                            customIconRight={appIcons.chevron_right} tintColor={colors.iconColor4}
                                            onPress={() => {navigate(routes.common, {screen: routes.howToUse})}}
                                            textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, }}
                                            iconStyle={{ alignSelf: 'center', }} />
                                    </Wrapper>
                                    <Wrapper style={{marginBottom:height(0.5)}}>
                                        <Buttons.Custom buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
                                            text={'Terms & Conditions'} customIconLeft={appIcons.file_text} hideContent4={true}
                                            onPress={() => {navigate(routes.common) }}
                                            customIconRight={appIcons.chevron_right} tintColor={colors.iconColor4} flex={6}
                                            textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, }}
                                            iconStyle={{ alignSelf: 'center', }} />
                                    </Wrapper>
                                    <Wrapper style={{marginBottom:height(0.5)}}>
                                        <Buttons.Custom buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
                                            text={'Logout'} customIconLeft={appIcons.log_out} hideContent4={true}
                                            customIconRight={appIcons.chevron_right} tintColor={colors.warning} flex={6}
                                            textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, }}
                                            onPress={toggleLogout}
                                            iconStyle={{ alignSelf: 'center', }} />
                                    </Wrapper>
                                </Wrapper>
                            </>
                        )}

                   {!hideContent3 && (

                    

                <Wrapper isCenter marginVerticalMedium>
                      <Wrapper marginVerticalSmall >
                      <Text isTinyTitle style={{fontFamily: appFonts.appTextBold }} >Logout?</Text>
                      </Wrapper>

                     <Wrapper marginVerticalMedium flexDirectionRow alignItemsCenter justifyContentCenter >

                      <Buttons.Colored buttonColor={colors.buttonColor2} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), borderColor: colors.buttonBorder1 }} text={'Cancel'} iconName={'Cancel'} iconType={'material-community'} textStyle={{ color: colors.appTextColor1, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
                      <Buttons.Colored buttonColor={colors.buttonColor1} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), borderColor: colors.buttonBorder1 }} text={'Logout'} iconName={'Logout'} iconType={'material-community'} textStyle={{ color: colors.appTextColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
                     </Wrapper>
                </Wrapper>   
                  )}
                    
                    </Wrapper>
                </Wrapper>
                {/* </LinearGradient> */}
                
            </Wrapper>
        </Modal >
        


    )
}


export const PopupPrimary = ({
    visible, toggle, title, info, iconName, iconType,
    customIcon, buttonText1, buttonText2, onPressButton1,
    onPressButton2, topMargin, children, scrollEnabled,
    backdropColor, backdropOpacity, onPressClose,
    button1Style, button2Style, keyboardShouldPersistTaps,
    headerTitle, topImage, headerRight, closeIconColor, disableSwipe, icon, disableBackdropPress,
    headerTitleStyle, preBottom, headerStyle, closeIconSize, rightContainerStyle, closeIconContainerSize,
    buttonWrapperShadow, headerBottom, titleStyle, buttonText1Style, buttonText2Style, headerSubtitleStyle, headerSubtitle,
    buttonsDirection, buttonsContainerStyle, mainContainerStyle, containerStyle,

    //loaders
    loadingButton1, loadingButton2,
    // New prop
}) => {


    // manage keyboard
    const keyboardVisible = useKeyboardStatus()

    const defaultTopMargin = Platform.OS === 'ios' ? height(50) : height(40)
    const customTopMargin = keyboardVisible ? height(10) : topMargin ? Platform.OS === 'ios' ? topMargin : topMargin - height(10) : defaultTopMargin
    const isRowButtons = buttonsDirection === 'row' || buttonsDirection === 'row-reverse'
    return (
        <Swipable
            visible={visible}
            toggle={toggle}
            hideHeader
            topMargin={customTopMargin}
            backdropColor={backdropColor}
            backdropOpacity={backdropOpacity ? backdropOpacity : 0}
            disableSwipe={disableSwipe}
            disableBackdropPress={disableBackdropPress}
            containerStyle={mainContainerStyle}
            hideContent={true}
        >
            <Wrapper style={containerStyle}>
                {
                    headerTitle ?
                        <Wrapper style={{}}>
                            <Wrapper style={[{ paddingHorizontal: sizes.marginHorizontal, backgroundColor: 'transparent', paddingBottom: sizes.marginVertical, paddingTop: sizes.marginVertical * 1.5, justifyContent: 'center', }, headerStyle]}>
                                <Text isSmallTitle style={[appStyles.textCenter, headerTitleStyle]}>{headerTitle}</Text>
                                {
                                    headerSubtitle ?
                                        <Text isRegular style={[appStyles.textCenter, { marginTop: sizes.smallMargin }, headerSubtitleStyle]}>{headerSubtitle}</Text>
                                        :
                                        null
                                }
                                <Wrapper isAbsolute style={[{ right: sizes.marginHorizontal, top: sizes.marginVertical * 1.3 }, rightContainerStyle]}>
                                    {
                                        headerRight ? headerRight :
                                            onPressClose ?
                                                <Icons.Button
                                                    iconName="close"
                                                    iconColor={closeIconColor ? closeIconColor : colors.appTextColor1}
                                                    //buttonColor={colors.appBgColor3}
                                                    onPress={onPressClose}
                                                    iconSize={closeIconSize ? closeIconSize : totalSize(3)}
                                                    buttonSize={closeIconContainerSize ? closeIconContainerSize : totalSize(4)}
                                                    isRound
                                                //buttonColor={'red'}
                                                />
                                                :
                                                null
                                    }
                                </Wrapper>
                            </Wrapper>
                            {headerBottom && headerBottom}
                        </Wrapper>
                        :
                        <Spacer height={sizes.baseMargin * 1.5} />
                }


                <ScrollViews.WithKeyboardAvoidingView
                    containerStyle={{ flex: 0 }}
                    scrollEnabled={scrollEnabled}

                >
                    <Wrapper style={[appStyles.alignItemsCenter]}>
                        {

                            (icon || iconName || customIcon) ?

                                <>
                                    {icon ? icon :
                                        <Icons.Button
                                            iconName={iconName}
                                            iconType={iconType}
                                            customIcon={customIcon}
                                            iconColor={colors.appTextColor6}
                                            buttonColor={colors.appColor1}
                                            buttonSize={totalSize(10)}
                                            iconSize={totalSize(4)}
                                            buttonStyle={{ borderRadius: 100, }}
                                        />
                                    }
                                    <Spacer height={sizes.baseMargin * 1.5} />
                                </>
                                :
                                null
                        }
                    </Wrapper>
                    {
                        title ?
                            <>
                                <Wrapper marginHorizontalBase style={{ backgroundColor: 'transparent' }}>
                                    <Text isSmallTitle isBoldFont style={[appStyles.textCenter, titleStyle]}>{title}</Text>
                                </Wrapper>
                                <Spacer height={sizes.baseMargin} />
                            </>
                            :
                            null
                    }
                    {
                        info ?
                            <>
                                <Wrapper marginHorizontalLarge style={{ backgroundColor: 'transparent', }}>
                                    <Text isRegular style={[appStyles.textCenter]}>{info}</Text>
                                </Wrapper>
                                <Spacer isBasic />
                            </>
                            :
                            null
                    }
                    {children}
                </ScrollViews.WithKeyboardAvoidingView>
                {preBottom}
                {/* </KeyboardAvoidingView> */}
                {/* <Spacers.Spacer height={sizes.baseMargin} /> */}

                {
                    onPressButton1 || onPressButton2 ?
                        <Wrapper
                            marginHorizontalBase
                            style={[{
                                backgroundColor: colors.appBgColor1,
                                paddingBottom: sizes.baseMargin * 1.5,
                                paddingTop: sizes.baseMargin,
                                flexDirection: buttonsDirection || 'column-reverse',
                            },
                            buttonWrapperShadow && appStyles.shadowDark,
                                buttonsContainerStyle
                            ]}>
                            {
                                onPressButton2 ?
                                    <Wrapper style={[isRowButtons && { flex: 1 }]}>
                                        <Buttons.Bordered
                                            text={buttonText2}
                                            onPress={onPressButton2}
                                            tintColor={colors.appColor1}
                                            //tintColor={colors.appTextColor1}
                                            buttonStyle={[appStyles.marginHorizontalZero, button2Style]}
                                            textStyle={[buttonText2Style]}
                                            isLoading={loadingButton2}

                                        />
                                    </Wrapper>
                                    :
                                    null
                            }
                            {
                                (onPressButton2 && onPressButton1) ?
                                    isRowButtons ?
                                        <Spacer width={sizes.marginHorizontal} />
                                        :
                                        <Spacer height={sizes.marginVertical} />
                                    : null
                            }

                            {
                                onPressButton1 ?
                                    <Wrapper style={[isRowButtons && { flex: 1 }]}>
                                        <Buttons.Colored
                                            text={buttonText1}
                                            onPress={onPressButton1}
                                            shadow
                                            buttonStyle={[{ marginHorizontal: 0, }, button1Style]}
                                            textStyle={[buttonText1Style]}
                                            isLoading={loadingButton1}
                                        />
                                    </Wrapper>
                                    :
                                    null
                            }
                        </Wrapper>
                        :
                        null
                }
                {/* <Spacers.Spacer height={sizes.baseMargin} /> */}

            </Wrapper>
        </Swipable>
    )
}

export const ImagePickerPopup = ({ visible, toggle, onPressButton1, onPressButton2, title, button1Text, button2Text, cancelText }) => {
    return (
        <PopupPrimary
            visible={visible}
            title={title || "Choose Image"}
            // buttonText2="Cancel"
            // onPressButton2={toggle}
            toggle={toggle}
            topMargin={height(60)}
        >
            <Wrapper>
                <Wrapper marginHorizontalBase>
                    {
                        onPressButton1 ?
                            <>
                                <Buttons.Colored
                                    text={button1Text || "Take Photo"}
                                    //  iconName="camera"
                                    buttonStyle={{ backgroundColor: colors.appBgColor2 }}
                                    textStyle={[{ color: colors.appTextColor3 }]}
                                    onPress={() => {
                                        toggle();
                                        setTimeout(() => {
                                            onPressButton1()
                                        }, 500);
                                    }}
                                    disableShadow
                                />
                                <Spacer isBasic />
                            </>
                            :
                            null
                    }

                    <Buttons.Colored
                        text={button2Text || "Select from Gallery"}
                        //iconName="image"
                        buttonStyle={{ backgroundColor: colors.appBgColor2 }}
                        textStyle={[{ color: colors.appTextColor3 }]}
                        onPress={() => {
                            toggle();
                            setTimeout(() => {
                                onPressButton2()
                            }, 500);
                        }}
                        disableShadow
                    />
                    <Spacer isBasic />
                    <Buttons.Colored
                        text={cancelText || "Cancel"}
                        //iconName="image"
                        buttonStyle={{ backgroundColor: colors.transparent }}
                        textStyle={[{ color: colors.appTextColor1 }]}
                        onPress={() => {
                            toggle();
                        }}
                        disableShadow
                    />
                </Wrapper>
            </Wrapper>
        </PopupPrimary>
    );
}