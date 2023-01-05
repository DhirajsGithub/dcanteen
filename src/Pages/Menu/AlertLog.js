import React, { useImperativeHandle } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from 'react-bootstrap/Alert';


const AlertLog = React.forwardRef((props, ref) => {

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  useImperativeHandle(ref, () => ({
    handleShow(bool, item) {
      setState({ open: bool, vertical: "top", horizontal: "center" });
    },
  }));

  return (
    <div >
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message={props.msg}
        key={vertical + horizontal}
       ><Alert key={props.variant} variant={props.variant} >
          {props.msg}
        </Alert></Snackbar>
    </div>
  );
});

export default AlertLog;
