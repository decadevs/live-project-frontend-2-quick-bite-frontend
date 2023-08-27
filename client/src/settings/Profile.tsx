import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getVendorProfile } from '../slices/vendorGetProfileSlice';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import EditVendor from '../components/EditVendor';

export default function MediaCard() {
    const [showEditVendor, setShowEditVendor] = useState(false);
    const dispatch = useAppDispatch();

    const { vendorProfile, isLoading } = useAppSelector((state) => state.vendorProfile);
    console.log(isLoading)

    useEffect(() => {
        dispatch(getVendorProfile());
    }, [dispatch]);

    const vendorInfoAvailable = vendorProfile;
    console.log(vendorProfile)
    
    return (
        <Grid container spacing={3}>
            <Grid item xs={8} sm={6}>
                <Card sx={{ minWidth: 50 + "%", mb: 3 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {vendorInfoAvailable ? vendorProfile.name_of_owner : "Vendor Name"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {vendorInfoAvailable ? (
                                <div>
                                    <strong>Email:</strong> {vendorProfile.email}
                                </div>
                            ) : (
                                <div>No vendor information available.</div>
                            )}
                            {vendorInfoAvailable && (
                                <>
                                    <div>
                                        <strong>Phone:</strong> {vendorProfile.phone_no}
                                    </div>
                                    <div>
                                        <strong>Restaurant Name:</strong> {vendorProfile.restaurant_name}
                                    </div>
                                    <div>
                                        <strong>Address:</strong> {vendorProfile.address}
                                    </div>
                                    <div>
                                        <strong>Company Name:</strong> {vendorProfile.company_name}
                                    </div>
                                </>
                            )}
                        </Typography>
                    </CardContent>
                </Card>
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => setShowEditVendor(prevShow => !prevShow)}
                >
                    {showEditVendor ? 'Close Edit' : 'Edit Vendor'}
                </Button>
                {showEditVendor && <EditVendor />}
            </Grid>
        </Grid>
    );
}
