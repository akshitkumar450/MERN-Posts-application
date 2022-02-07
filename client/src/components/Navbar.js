import { Button, Avatar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { GoogleLogout } from "react-google-login";
function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user.user);
  const signOut = () => {
    dispatch(logout());
    history.push("/auth/login");
  };
  // console.log(user);
  return (
    <div className="flex items-center rounded-lg h-16 justify-around bg-blue-500">
      <Link to="/posts">
        <div className="flex items-center">
          <h3 className="text-4xl font-semibold text-white">Memories</h3>
          <img
            className="w-12 ml-4"
            src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"
            alt="logo"
          />
        </div>
      </Link>

      <div className="flex items-center">
        <div className="mr-5">
          <Avatar src={user?.user?.imageUrl} />
        </div>
        {user ? (
          <GoogleLogout
            clientId="341061266972-da2k9reaojd282hvie7d5mi281evedt5.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                variant="contained"
                color="secondary"
                onClick={renderProps.onClick}
                size="large">
                logout
              </Button>
            )}
            onLogoutSuccess={signOut}
          />
        ) : (
          <Link to="/auth/login" className="block">
            <Button variant="contained" color="secondary" size="large">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
