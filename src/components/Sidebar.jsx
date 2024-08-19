import Logo from '../components/Logo';
import AppNav from './AppNav';
import styles from './Sidebar.module.css';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
// this Outlet element is just like the "children" props we pass to a component to read the child components nested in it
// so, this Outlet is infact the nested routes of App route (cities, countries, form)
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
