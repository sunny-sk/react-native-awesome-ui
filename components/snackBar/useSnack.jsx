import { useContext } from "react";
import SnackBarContext from "./SnackBarContext";
// import SnackMessageType from "../../constants/Types";
const useSnack: any = () => {
  const { showMessage } = useContext(SnackBarContext);
  return { showMessage };
};

export default useSnack;
