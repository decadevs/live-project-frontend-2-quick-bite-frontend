import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import Sidenav from "../components/dashboard/sidenav"
import Navbar from "../components/dashboard/Navbar"
import AccordionDash from "../components/dashboard/Accordion"
import Grid from '@mui/material/Grid';
import "../styles/Dash.css"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AreaChart from "../charts/AreaChart";
import CountUp from 'react-countup';
import { useEffect, useState } from "react";

export default function VendorHome() {
    const [totalEarnings, setTotalEarnings] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        // Fetch total earnings from the backend API endpoint
        fetch('/api/vendor/earning')
            .then(response => response.json())
            .then(data => {
                setTotalEarnings(data.totalEarnings);
            })
            .catch(error => {
                console.error('Error fetching total earnings:', error);
            });
    }, []);

    useEffect(() => {
        fetch("/api/getTotalOrders")
            .then(response => response.json())
            .then(data => {
                setTotalOrders(data.totalOrders);
            })
            .catch((err) => {
                console.log(`Error fetching the orders`, err)
            });
    }, []);

    useEffect(() => {
        fetch("/api/getTotalRevenue")
            .then(response => response.json())
            .then(data => {
                setTotalRevenue(data.totalRevenue);
            })
            .catch((err) => {
                console.log(`Error fetching the revenue`, err)
            });
    }, []);

    return (
        <>
            <div className="bgColor">
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                                        <CardContent>
                                            <div className="iconstyle">
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                $<CountUp delay={0.2} end={totalEarnings} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Earning
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradientlight">
                                        <CardContent>
                                            <div className="iconstyle">
                                                <LocalMallIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                <CountUp delay={0.2} end={totalOrders} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Orders
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                                        <CardContent>
                                            <div className="iconstyle">
                                                <LocalMallIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                <CountUp delay={0.2} end={totalRevenue} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Revenue
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <AreaChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className="paddingall">
                                            <span className="pricetitle">Popular Products</span>
                                        </div>
                                        <AccordionDash />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}



