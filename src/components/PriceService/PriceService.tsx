import { FC, useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../api/firebase";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

// import css from "./PriceService.module.css";

function createData(description: string, price: number) {
  return { description, price };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PriceService: FC = () => {
  const [priceList, setPriceList] = useState<DocumentData[]>([]);

  const rows = priceList.map((el) =>
    createData(el.item.description, el.item.price)
  );

  useEffect(() => {
    const q = query(collection(db, "price"), orderBy("description", "asc"));
    onSnapshot(q, (snapshot) => {
      setPriceList(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
            <Typography variant="body1" fontWeight="bold">
                  Назва послуги
                </Typography>
            </StyledTableCell>
            <StyledTableCell align="right">
            <Typography variant="body1" fontWeight="bold">
                  Вартість
                </Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.description}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price+" грн."}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default PriceService;
