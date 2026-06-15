import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AppLayout } from "./layouts";
import { AppScene } from "./scenes";

export const App = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppScene />
      </LocalizationProvider>
    </>
  );
};
