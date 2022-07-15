import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "../../../Services/api";
import { useNavigate } from "react-router-dom";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { red } from "@mui/material/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nav = useNavigate();
  //close this post and navigate to Items...
  const closeIssue = () => {
    axios
      .get(`/Items/close/${props.id}`)
      .then(() => {
        window.location.replace("/items");
      })
      .catch((err) => {
        nav("/notFound");
      });
  };
  return (
    <div className="text-start ms-2">
      <Button
        style={{ backgroundColor: "#B31412" }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Close Issue
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"We hope that you have found this item"}</DialogTitle>
        <DialogContent>
          <img
            style={{ width: "450px" }}
            src="https://marketing-assets.wheniwork-production.com/2020/01/16143317/footer-group-illustration-optimized.svg"
          />
          <br />
          <br />
          <DialogContentText id="alert-dialog-slide-description">
            <WarningAmberIcon sx={{ color: red[500] }} /> &nbsp; Are You Sure
            About Closing This Issue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={closeIssue}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
