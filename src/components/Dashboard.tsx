import classes from './Dashboard.module.css';
import { Outlet, NavLink } from 'react-router-dom';

interface Props{
  children?: React.ReactNode;
}

const Dashboard = (props: Props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1>My music</h1>
      </div>
      <div className={classes.options}>
        <NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/songs' end>Songs</NavLink>
        <NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/songs/artists' end>Artists</NavLink>
        <NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/songs/albums' end>Albums</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;