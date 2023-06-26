import { Link } from 'react-router-dom';
import classes from '../style/Mobile.module.css'
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const MobileHeader = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={classes.mobile_header_area}>
            <div className={classes.mobile_header_left} onClick={()=>dispatch(uiActions.togglePane())}>
                <img src={require("../images/hamburger-menu.png")}className={classes.header_icon} alt='menu'/>
            </div>
            <Link className={classes.mobile_header_middle} to="/">
                Fast DeFi Tutorial
            </Link>
            <div className={classes.mobile_header_right}></div>
        </div>
    )
}

export default MobileHeader;