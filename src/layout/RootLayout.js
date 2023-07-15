import { Outlet } from 'react-router-dom';
import classes from '../style/Main.module.css';
import MainNavigation from './MainNavigation';
import MobileHeader from '../components/MobileHeader';
import { Helmet } from 'react-helmet';

let RootLayout = () => {
    return (
        <div className={classes.layout}>
            <Helmet>
                {/* nothing */}
            </Helmet>
            <MainNavigation/>
            <MobileHeader/>
            <div className={classes.main}>
                <div className={classes.viewer}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default RootLayout;