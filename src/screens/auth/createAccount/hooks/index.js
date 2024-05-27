import { useState } from "react"

export function useHooks() {

    const [accepted, setAccepted] = useState(false)

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmShowPassword(!showConfirmPassword);
    };


    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return {
        accepted,
        setAccepted,
        toggleCheckbox,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
        setEmail,
        email,
        setName,
        name,
        showPassword,
        showConfirmPassword,
        setPassword,
        setConfirmPassword,
        confirmPassword,
        password,
        isChecked,

    }
}