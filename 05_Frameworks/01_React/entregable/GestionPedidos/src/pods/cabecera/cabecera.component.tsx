import dayjs from "dayjs";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";

interface Props {
  orderNumber: number;
  supplier: string;
  date: Date;
  totalOrder: number;
  status: number;
}

export const Cabecera: React.FC<Props> = ({
  orderNumber,
  supplier,
  date,
  totalOrder,
  status,
}) => {
  return (
    <>
      <Box
        component="form"
        className="marginPanel"
        sx={{
          /* "& .MuiTextField-root": { m: 1, width: "25ch" }, */
          borderRadius: 1,
          borderStyle: "solid",
          borderColor: "primary.main",
          padding: "10px",
          /* bgcolor: "primary.main", */
        }}
      >
        <div>
          {/* <FormControl variant="standard">
        <InputLabel htmlFor={`${simpleId}-input`}>Name</InputLabel>
        <Input id={`${simpleId}-input`} defaultValue="Composed TextField" />
      </FormControl> */}
          {/*  <FormControl variant="standard"> */}
          <TextField
            id="number"
            label="Número"
            value={orderNumber}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
            sx={{ m: 1, width: "25ch" }}
          />
          <TextField
            id="provider"
            label="Proveedor"
            value={supplier}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
            sx={{ m: 1, width: "25ch" }}
          />
          <DatePicker
            readOnly
            sx={{ margin: "8px", width: "25ch" }}
            value={dayjs(date)}
          />
        </div>
        <div>
          <TextField
            id="importeTotal"
            label="Importe Total"
            value={totalOrder}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
            sx={{ m: 1, width: "25ch" }}
          />
          <FormControlLabel
            value={status}
            control={
              <TextField
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            }
            label="Estado"
            labelPlacement="bottom"
            sx={{ m: 1, width: "75px" }}
          />
        </div>
        <div className="flexEnd">
          <Button variant="contained">Enviar</Button>
        </div>
      </Box>
    </>
  );
};
