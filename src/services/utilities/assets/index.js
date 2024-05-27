import * as appSvgs from './appSvgs'

// leave off @2x/@3x
const appImages = {
    logo: require('../../../assets/images/Logo.png'),
    book: require('../../../assets/images/menu_book.png'),
    backgroundImage: require('../../../assets/images/backgroundImage.png'),
    profile: require('../../../assets/images/PFP.png'),
    uploadPhoto: require('../../../assets/images/uploadPhoto.png'),
    user1: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    user2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
    user3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwMIGTutu1jpkhgNCLM-Rd2gz3d0MRSXuPw&usqp=CAU',
    user4: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    user5: 'https://i.pinimg.com/474x/c2/76/05/c2760595530e6633ae778a60de74f127.jpg',
    noUser: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',

    materCardLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png',
    visaCardLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png',
}

const appIcons = {
    security: require('../../../assets/icons/security.png'),
    lock: require('../../../assets/icons/lock.png'),
    mail: require('../../../assets/icons/mail.png'),
    eye: require('../../../assets/icons/eye.png'),
    logIn: require('../../../assets/icons/logIn.png'),
    notification: require('../../../assets/icons/notificationBell.png'),
    edit: require('../../../assets/icons/edit.png'),
    format_size: require('../../../assets/icons/format_size.png'),
    info: require('../../../assets/icons/info.png'),
    file_text: require('../../../assets/icons/file_text.png'),
    log_out: require('../../../assets/icons/log_out.png'),
    chevron_right: require('../../../assets/icons/chevron_right.png'),
    arrow_back: require('../../../assets/icons/arrow_back.png')
}

const appFonts = {
    // appTextLight: 'Roboto-Light',
    // appTextRegular: 'Roboto-Regular',
    // appTextMedium: 'Roboto-Medium',
    // appTextBold: 'Roboto-Bold',
    appTextLight: 'Satoshi-Light',
    appTextRegular: 'Satoshi-Regular',
    appTextMedium: 'Satoshi-Medium',
    appTextBold: 'Satoshi-Bold',
  }

export { appImages, appIcons, appSvgs,appFonts }
