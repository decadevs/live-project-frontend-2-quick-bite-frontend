import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllFoodCount } from "../../slices/getAllFoodCountSlice";
import VendorCreatesFood from '../../components/VendorCreatesFood';
import { Modal } from "@mui/material";

interface Column {
    id:
    | "name"
    | "price"
    | "order_count"
    | "ready_time"
    | "isAvailable"
    | "rating";
    label: string;
    minWidth?: number;
    align?: "right" | "left" | "center";
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: "name", label: "Name", minWidth: 100 },
    {
        id: "price",
        label: "Price",
        minWidth: 100,
        align: "right"
    },
    {
        id: "order_count",
        label: "Order Count",
        minWidth: 170,
        align: "center"
    },
    { id: "isAvailable", label: "Available", minWidth: 150, align: "center" },
    { id: "ready_time", label: "Ready Time", minWidth: 170, align: "center" },
    { id: "rating", label: "Rating", minWidth: 170, align: "center" }
];

interface Data {
    name: string;
    price: number;
    order_count: number;
    ready_time: string;
    rating: string;
    isAvailable: string;
}

function createData(
    name: string,
    price: number,
    order_count: number,
    ready_time: string,
    rating: string,
    isAvailable: string
): Data {
    return {
        name,
        price,
        order_count,
        ready_time,
        rating,
        isAvailable,
    };
}

export default function ProductList() {
    const dispatch = useAppDispatch();
    const { allFoodCount, isLoading } = useAppSelector(
        (state) => state.allFoodCount
    );
    console.log("All Foood Details", allFoodCount, isLoading);

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    // };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    React.useEffect(() => {
        dispatch(getAllFoodCount());
    }, [dispatch]);

    const rows = allFoodCount.map((food: any) =>
        createData(
            food.name,
            food.price,
            food.order_count,
            food.ready_time,
            food.rating,
            food.isAvailable
        )
    );

    console.log("row", rows);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <VendorCreatesFood />
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1}>
                                        {columns.map((column) => {
                                            console.log("col", column);
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === "number"
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
            >
                <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                    <VendorCreatesFood />
                </div>
            </Modal>
        </Paper>
    );
}
