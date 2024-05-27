import React, { Component } from 'react';
import { View } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Wrapper, Text, Images, Spacer, Icons, Buttons, ScrollViews, HeaderHome, Headers, Modals } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons } from '../../../services';
import { Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


export default function Home(props) {
  const { navigate, goBack } = props.navigation
  const { modalHomeVisible, setModalHomeVisible, modalHomeVisibility, data, value, setValue, modalLogoutVisible, modalLogoutVisibility } = useHooks()
  return (
    <Wrapper isMain isImageBackground source={appImages.backgroundImage}>
      <ScrollViews.KeyboardAvoiding>
        <Wrapper >
          <Wrapper flexDirectionRow justifyContentSpaceBetween paddingHorizontalBase style={{ backgroundColor: colors.transparent , marginTop: height(6) }} >
            
            <Headers.Primary title={'Quran AI'} titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor1, fontSize: fontSizes.h4, }} containerStyle={{height:height(10), backgroundColor:colors.transparent}}/>
            
            <Wrapper flexDirectionRow>
              <Wrapper marginHorizontalSmall style={{ alignSelf: 'center', justifyContent: 'center', height: sizes.images.mediumSmall, width: sizes.images.mediumSmall, backgroundColor: colors.buttonColor3, borderRadius: 150}}>
                <Icons.Button   buttonStyle={{alignSelf: 'center', justifyContent: 'center', height: sizes.icons.large, width: sizes.icons.large}} iconSize={sizes.icons.medium} iconColor={colors.iconColor4} buttonColor={colors.transparent} iconName={'bell-outline'} iconType={'material-community'} />
              
              </Wrapper>
              <Wrapper  style={{ alignSelf: 'center', justifyContent: 'center', height: sizes.images.mediumSmall, width: sizes.images.mediumSmall, backgroundColor: 'blue', borderColor: colors.buttonColor1, borderRadius: 150, borderWidth: height(0.4) }} >
                <Icons.Custom onPress={modalHomeVisibility} icon={appImages.profile} containerStyle={{ alignSelf: 'center', justifyContent: 'center',  }} size={sizes.images.mediumXSmall} />
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper>
          
          </Wrapper>

          <Modals.Swipable 
                navigate={navigate} 
                data={data} 
                setValue={setValue} 
                toggleLogout={()=>{modalLogoutVisibility(); modalHomeVisibility(false)}} 
                visibleLogout={modalLogoutVisible} 
                value={value} 
                hideContent={true} 
                hideHeader 
                hideContent3={true}
                visible={modalHomeVisible} 
                toggle={modalHomeVisibility} 
                disableBackdropPress={false} 
            />
        </Wrapper>

         <Wrapper  >
          <Modals.Swipable

            hideHeader
            
            hideContent={true}
            hideContent2={true}
            toggle={()=>{modalLogoutVisibility() }}
            visible={modalLogoutVisible}
          
          />

         </Wrapper>

         <Wrapper>
          <GiftedChat
            
          />
         </Wrapper>



      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}


