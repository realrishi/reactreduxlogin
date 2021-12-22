import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Redux/userSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="basetemp-container1">
      <div className="col-md-6 col-md-offset-2">
      <Card  style={{ width: '18rem' }} body>
        Wlecome <span>{user.name}</span> to Jumanji!!
      </Card>
      <Button
        className="addbtn button1"
        variant="danger"
        type="button"
        onClick={(e) => handleClick(e)}
      >
        Logout
      </Button>
    </div>
    </div>
  );
};

export default Logout;
