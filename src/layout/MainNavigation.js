import { Link } from 'react-router-dom'
import classes from '../style/Navigation.module.css'
import NavigationList from "../components/NavigationList"
import { useState } from 'react'
import { useSelector } from 'react-redux'

const MainNavigation = (props) => {
    const leftPaneShowing = useSelector(state=>state.ui.leftPaneShowing)

    const [scroll, setScroll] = useState(0)
    const scrollHandler = () => {
        document.getElementById('left_pane_scroll').addEventListener("scroll", () => {
            const scrollCheck = document.getElementById('left_pane_scroll').scrollTop > 0;
            if(scrollCheck !== scroll) setScroll(scrollCheck)
        })
    }

    return (
        <div className={`${classes.left_pane} ${leftPaneShowing&&classes.left_pane_mobile_show}`}>
            <Link to='/' className={`${classes.left_pane_title} ${scroll&&classes.left_pane_scroll_scrolled}`}>
                Fast DeFi Tutorial
            </Link>
            <NavigationList scrollHander={scrollHandler}/>
        </div>
    )
}

export default MainNavigation