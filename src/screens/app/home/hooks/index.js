import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native'
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { routes } from '../../../../services';

export function useHooks() {

    const [modalHomeVisible, setModalHomeVisible] = useState(false);
    const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
    const [value, setValue] = useState(null);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
        navigate(routes.auth);
        return true;
    };

    const modalLogoutVisibility = () => {
        setModalLogoutVisible(!modalLogoutVisible);
    };
    const modalHomeVisibility = () => {
        setModalHomeVisible(!modalHomeVisible);
    };

    const data = [
        { label: 'Large', value: '1' },
        { label: 'Medium', value: '2' },
        { label: 'Small', value: '3' },
    ];


    return { modalHomeVisible, modalHomeVisibility, data, value, setValue,setModalHomeVisible, goBack, modalLogoutVisible, modalLogoutVisibility }
}