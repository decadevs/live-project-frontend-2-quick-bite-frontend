import { useState } from 'react';
import { Button } from '@mui/material';
import VendorPassword from '../components/vendorPassword';

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);

    const toggleButton = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <>
            <Button variant='contained' color='success' onClick={toggleButton}>
                {showPassword ? 'Hide' : 'Show'} Password
            </Button>
            {showPassword && <VendorPassword />}
        </>
    );
}
