import { MARGIN_SCENE } from "@/core/constants";
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

export const Cabecera: React.FC = () => {
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
          <TextField id="number" label="Número" sx={{ m: 1, width: "25ch" }} />
          <TextField
            id="provider"
            label="Proveedor"
            sx={{ m: 1, width: "25ch" }}
          />
          <DatePicker sx={{ margin: "8px", width: "25ch" }} />
        </div>
        <div>
          <TextField
            id="importeTotal"
            label="Importe Total"
            sx={{ m: 1, width: "25ch" }}
          />
          <FormControlLabel
            value=""
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
