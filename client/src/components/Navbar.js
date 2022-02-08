import { Button, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { GoogleLogout } from "react-google-login";
function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token, user);
  const signOut = () => {
    dispatch(logout());
    history.push("/auth/login");
    localStorage.clear();
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUser(JSON.parse(localStorage.getItem("user")));
    // when ever the route changes run this
  }, [location]);

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
          <Avatar src={user?.imageUrl} alt={user?.name}>
            {user?.name}
          </Avatar>
        </div>
        {user ? (
          // <GoogleLogout
          //   clientId="341061266972-da2k9reaojd282hvie7d5mi281evedt5.apps.googleusercontent.com"
          //   render={(renderProps) => (
          //     <Button
          //       variant="contained"
          //       color="secondary"
          //       onClick={renderProps.onClick}
          //       size="large">
          //       logout
          //     </Button>
          //   )}
          //   onLogoutSuccess={signOut}
          // />

          <Button
            variant="contained"
            color="secondary"
            onClick={signOut}
            size="large">
            logout
          </Button>
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
