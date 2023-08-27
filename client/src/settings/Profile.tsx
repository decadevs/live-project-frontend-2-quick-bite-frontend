import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getVendorProfile } from '../slices/vendorGetProfileSlice';
import { useEffect } from 'react';
import { Button } from '@mui/material';

export default function MediaCard() {
    const dispatch = useAppDispatch();

    const { vendorProfile, isLoading } = useAppSelector((state) => state.vendorProfile);

    useEffect(() => {
        dispatch(getVendorProfile());
    }, [dispatch]);

    const vendorInfoAvailable = vendorProfile && vendorProfile.length > 0;

    return (
        <Grid container spacing={3}>
            <Grid item xs={8} sm={6}>
                <Card sx={{ minWidth: 50 + "%", mb: 3 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {vendorInfoAvailable ? vendorProfile[0].name_of_owner : "Vendor Name"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {vendorInfoAvailable ? (
                                <div>
                                    <strong>Email:</strong> {vendorProfile[0].email}
                                </div>
                            ) : (
                                <div>No vendor information available.</div>
                            )}
                            {vendorInfoAvailable && (
                                <>
                                    <div>
                                        <strong>Phone:</strong> {vendorProfile[0].phone_no}
                                    </div>
                                    <div>
                                        <strong>Restaurant Name:</strong> {vendorProfile[0].restaurant_name}
                                    </div>
                                    <div>
                                        <strong>Address:</strong> {vendorProfile[0].address}
                                    </div>
                                    <div>
                                        <strong>Company Name:</strong> {vendorProfile[0].company_name}
                                    </div>
                                </>
                            )}
                        </Typography>
                    </CardContent>
                </Card>
                <Button variant="contained" color="primary" size="large">
                    Edit Profile
                </Button>
            </Grid>
        </Grid>
    );
}
