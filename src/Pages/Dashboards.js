import React from "react";
import Header from '../Views/Header.js';
import { useEffect, useState } from "react";
import Admin from "../Views/Admin.js";
import Login from "./Login";
function Dashboard() {

        const [authenticated, setauthenticated] = useState(null);
        useEffect(() => {
          const loggedInUser = localStorage.getItem("authenticated");
          if (loggedInUser) {
            setauthenticated(loggedInUser);
          }
        }, []);
        if (!authenticated) {
              <>
                 <Login/>
              </>
        } else {
          return (
            <div>
                  <Header/>
                  <Admin/>
            </div>
          );
        }
      };

    export default Dashboard;