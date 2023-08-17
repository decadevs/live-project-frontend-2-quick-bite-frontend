import { useState, useEffect } from 'react';
import { Paper, Typography, Grid, Button, IconButton, Box } from '@mui/material';
import { styled } from '@mui/system';
import { DataGrid, GridColDef, GridValueFormatterParams } from '@mui/x-data-grid';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import VendorCreatesFood from '../../components/VendorCreatesFood';

interface Product {
    id: number;
    order_count: number;
    name: string;
    date_created: Date;
    date_updated: Date;
    vendorId: number;
    price: number;
    food_image: string;
    ready_time: number;
    isAvailable: boolean;
    rating: number;
    description: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: '14px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
}));

const ProductList = () => {
    const [productData, setProductData] = useState<Product[]>([]);
    const [selectedSection, setSelectedSection] = useState<string>('products');
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3030/products/fetch');
            const { allData: products } = response.data;
            setProductData(products);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSectionSelect = (section: string) => {
        setSelectedSection(section);
    };

    const handleEdit = (id: number) => {
        console.log(`Edit product with ID: ${id}`);
    };

    const handleDelete = (id: number) => {
        console.log(`Delete product with ID: ${id}`);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteApi(id);
                    const updatedProducts = productData.filter((product) => product.id !== id);
                    setProductData(updatedProducts);
                    Swal.fire('Deleted!', 'The product has been deleted.', 'success');
                } catch (error) {
                    console.error(error);
                    Swal.fire('Error', 'An error occurred while deleting the product.', 'error');
                }
            }
        });
    };

    const deleteApi = async (id: number) => {
        // eslint-disable-next-line no-useless-catch
        try {
            await axios.delete(`http://localhost:3030/products/${id}`);
        } catch (error) {
            throw error;
        }
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSaveProduct = (newProduct: Product) => {
        setProductData((prevProducts) => [...prevProducts, newProduct]);
        setOpenDialog(false);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'price', headerName: 'Price', type: 'number', width: 100 },
        { field: 'order_count', headerName: 'Order Count', type: 'number', width: 120 },
        { field: 'date_created', headerName: 'Date Created', type: 'date', width: 120 },
        { field: 'date_updated', headerName: 'Date Updated', type: 'date', width: 120 },
        { field: 'vendorId', headerName: 'Vendor ID', type: 'number', width: 80 },
        { field: 'ready_time', headerName: 'Ready Time', type: 'number', width: 100 },
        { field: 'isAvailable', headerName: 'Available', type: 'boolean', width: 90 },
        { field: 'rating', headerName: 'Rating', type: 'number', width: 80 },
        { field: 'description', headerName: 'Description', type: 'string', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 110,
            renderCell: (params: GridValueFormatterParams) => (
                <Box display="flex" justifyContent="center">
                    <IconButton onClick={() => handleEdit(params.row.id)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <StyledPaper
                    elevation={3}
                    onClick={() => handleSectionSelect('products')}
                    sx={{ backgroundColor: selectedSection === 'products' ? '#f5f5f5' : 'inherit' }}
                >
                    <Typography variant="h6">Product List ({productData.length})</Typography>
                </StyledPaper>
                <VendorCreatesFood open={openDialog} onClose={handleCloseDialog} onSave={handleSaveProduct} />
                {selectedSection === 'products' && (
                    <div style={{ height: '400px', width: '100%' }}>
                        <DataGrid
                            rows={productData}
                            columns={columns}
                            autoHeight
                            pagination
                            pageSize={5}
                        />
                    </div>
                )}
            </Grid>
        </Grid>
    );
};

export default ProductList;
