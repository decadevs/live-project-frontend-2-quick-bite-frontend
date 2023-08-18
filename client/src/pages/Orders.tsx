import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getOrderCount } from "../slices/orderCountSlice";
import Navbar from "../components/dashboard/Navbar";
import { Box } from "@mui/material";
import Sidenav from "../components/dashboard/sidenav";

interface Column {
  id: "food_name" | "quantity" | "amount" | "status" | "isPaid";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "food_name", label: "Name", minWidth: 70 },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 100,
    align: "center",
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
    align: "center",
  },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  { id: "isPaid", label: "Paid", minWidth: 100, align: "center" },
];

interface Data {
  food_name: string;
  quantity: number;
  amount: number;
  status: string;
  isPaid: boolean;
}

function createData(
  food_name: string,
  quantity: number,
  amount: number,
  status: string,
  isPaid: boolean
): Data {
  return {
    food_name,
    quantity,
    amount,
    status,
    isPaid
  };
}

export default function VendorOrder() {
  const dispatch = useAppDispatch();
  const { vendorOrder, isLoading } = useAppSelector(
    (state) => state.vendorOrder
  );
  console.log("All Order Details", vendorOrder, isLoading);

  React.useEffect(() => {
    dispatch(getOrderCount());
  }, [dispatch]);

  const rows = vendorOrder.map((order: any) =>
    createData(
      order.food_name,
      order.quantity,
      order.amount,
      order.status,
      order.isPaid
    )
  );

  console.log("row", rows);

  // allFoodCount.map((item) => console.log("product food  ", item))

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
    <>
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
          </Paper>
        </Box>
      </Box>
    </>
  );
}
