import { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import classes from "./Home.module.css";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <div className={classes.main}>
        <Sidebar />
        <Outlet />
      </div>
      <Player />
    </Fragment>
  );
}

export default HomePage;