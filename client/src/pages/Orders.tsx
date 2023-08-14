import { useState, useEffect } from 'react';
import {
    Container,
    Typography,
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

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:4500/vendor/getallfood');
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
