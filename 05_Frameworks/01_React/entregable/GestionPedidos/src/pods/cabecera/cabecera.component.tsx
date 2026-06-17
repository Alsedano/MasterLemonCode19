import dayjs from "dayjs";
import { Box, Button, LinearProgress, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";

interface Props {
  orderNumber: number;
  supplier: string;
  date: Date;
  totalOrder: number;
  status: number;
}

export const Cabecera: React.FC<Props> = ({ orderNumber, supplier, date, totalOrder, status }) => {
  return (
    <>
      <Box
        component="form"
        className="marginPanel"
        sx={{
          borderRadius: 1,
          borderStyle: "solid",
          borderColor: "primary.main",
          padding: "10px",
        }}>
        <div>
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
          <DatePicker readOnly sx={{ margin: "8px", width: "25ch" }} value={dayjs(date)} />
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
          <Box sx={{ display: "flex", alignItems: "center", margin: "8px" }}>
            <Box sx={{ minWidth: 50 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Estado
              </Typography>
            </Box>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress variant="determinate" value={status} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {status}
              </Typography>
            </Box>
          </Box>
        </div>
        <div className="flexEnd">
          <Button variant="contained" disabled={status !== 100}>
            Enviar
          </Button>
        </div>
      </Box>
    </>
  );
};
