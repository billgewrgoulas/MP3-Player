import classes from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMusic, faClock, faBarsProgress, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


interface Props{
  childrean?: React.ReactNode;
}

const options: any[] = [
  {icon: faMusic, text: 'My music', to: '/songs'},
  {icon: faClock, text: 'Recently played', to: '/recently-played'},
  {icon: faBarsProgress, text: 'Now playing', to: '/now-playing'},
];

const Sidebar = (props: Props) => {

  const toggleSidebar = () => {
    console.log('toggle sidebar');
  }

  const content = options.map((opt, index) => (
    <li key={index}>
      <NavLink to={opt.to} className={({isActive}) => isActive ? classes.active : undefined}>
        <FontAwesomeIcon icon={opt.icon}/>
        <span>{opt.text}</span>
      </NavLink >
    </li>    
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.handle}>
        <div className={classes['handle-wrapper']} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={classes.search}>
        <input type="text" name="search" id="search" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <ul className={classes.options}>
        {content}
      </ul>
    </div>
  );
}

export default Sidebar;