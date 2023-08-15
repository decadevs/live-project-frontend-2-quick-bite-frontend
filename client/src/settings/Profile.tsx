import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



export default function MediaCard() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={8} sm={6}>
                <Card sx={{ maxWidth: 345, mb: 3 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Vendor Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div>
                                <strong>Email:</strong> edgarhansen@gmail.com
                            </div>
                            <div>
                                <strong>Phone:</strong> +234 912 765 2354
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card sx={{ minWidth: 50 + "%" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            About Me
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            fringilla massa in dui ornare, eget tincidunt est ullamcorper.
                            Nullam eget tortor sit amet quam accumsan tristique. Integer ut
                            magna lacinia, tincidunt sapien vitae, condimentum libero. Sed
                            auctor augue vitae felis lacinia, vel ullamcorper justo
                            vestibulum.
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div>
                                <strong>Full Name:</strong> John Doe
                            </div>
                            <div>
                                <strong>Vendor Reg Number:</strong> ABC123
                            </div>
                            <div>
                                <strong>Vendor ID:</strong> 12345
                            </div>
                            <div>
                                <strong>Rating:</strong> 4.5
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
