import { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton,
} from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(true);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [newOrder, setNewOrder] = useState({
        foodid: '',
        food_name: '',
        quantity: 0,
        amount: 0,
        status: '',
        userId: '',
        vendorId: '',
        isPaid: false,
    });

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:3030/orders/fetch');
            const ordersData = response.data.allData;
            setOrders(ordersData);
            setOrdersLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (orderId: string) => {
        console.log(`Edit order with ID: ${orderId}`);
    };

    const handleDelete = (orderId: string) => {
        console.log(`Delete order with ID: ${orderId}`);
    };

    const handleCreateOrder = async () => {
        try {
            await axios.post('http://localhost:3030/orders/create', newOrder);
            fetchOrders();
            setOpenDialog(false);
            setNewOrder({
                foodid: '',
                food_name: '',
                quantity: 0,
                amount: 0,
                status: '',
                userId: '',
                vendorId: '',
                isPaid: false,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setNewOrder({
            foodid: '',
            food_name: '',
            quantity: 0,
            amount: 0,
            status: '',
            userId: '',
            vendorId: '',
            isPaid: false,
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    const handleSave = () => {
        handleCreateOrder();
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'foodid', headerName: 'Food ID', width: 120 },
        { field: 'food_name', headerName: 'Food Name', width: 180 },
        { field: 'quantity', headerName: 'Quantity', type: 'number', width: 120 },
        { field: 'amount', headerName: 'Amount', type: 'number', width: 120 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'userId', headerName: 'User ID', width: 150 },
        { field: 'vendorId', headerName: 'Vendor ID', width: 150 },
        { field: 'isPaid', headerName: 'Paid', type: 'boolean', width: 100 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton color="primary" onClick={() => handleEdit(params.row.id)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    ];

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
                Orders
            </Typography>
            <div>
                <Typography variant="h6" gutterBottom>
                    Add Order
                </Typography>
                <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
                    Add Order
                </Button>
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Add Order</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Food Name"
                            name="food_name"
                            value={newOrder.food_name}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Quantity"
                            name="quantity"
                            type="number"
                            value={newOrder.quantity}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Amount"
                            name="amount"
                            type="number"
                            value={newOrder.amount}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Status"
                            name="status"
                            value={newOrder.status}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="User ID"
                            name="userId"
                            value={newOrder.userId}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Vendor ID"
                            name="vendorId"
                            value={newOrder.vendorId}
                            onChange={handleChange}
                            fullWidth
                        />
                        <FormControl fullWidth>
                            <InputLabel>Paid</InputLabel>
                            <Select
                                name="isPaid"
                                value={newOrder.isPaid}
                                onChange={handleChange}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSave} color="primary">
                            Add
                        </Button>
                        <Button onClick={handleCloseDialog} color="secondary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div style={{ height: 400, width: '100%', marginTop: '2rem' }}>
                <DataGrid
                    rows={orders}
                    columns={columns}
                    pageSize={5}
                    loading={ordersLoading}
                    onRowClick={(params) => setSelectedOrderId(params.row.id)}
                />
            </div>
        </Container>
    );
};

export default Orders;
