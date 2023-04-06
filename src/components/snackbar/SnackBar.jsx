import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";

export default function SnackBar({ open, setOpen, isValidUrl }) {
  // const [open, setOpen] = React.useState(false);
  const isValid = isValidUrl;
  const severity = isValid ? "success" : "error";

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        sx={{ width: "250px" }}
        action={action}
      >
        <Alert
          severity={severity}
          variant="filled"
          sx={{ width: "100%", fontSize: "13px" }}
          onClose={handleClose}
        >
          {severity == "error" ? "Invalid URL" : " Valid URL"}
        </Alert>
      </Snackbar>
    </div>
  );
}
