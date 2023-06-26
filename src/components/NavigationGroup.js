import { useEffect, useState } from 'react';
import classes from '../style/Navigation.module.css';
import { Link, useParams } from "react-router-dom"
import NavigationGroupList from './NavigationGroupList';
import NavigationLink from './NavigationLink';
import GROUP_DATA from '../data/GROUP_DATA.json';

const NavigationGroup = (props) => {
    const {topic} = useParams();
    const [show,setShow] = useState(false);
    const toggleGroupShowHandler = () => setShow(!show);

    useEffect(()=>{
        const selectedGroupArray = Object.keys(GROUP_DATA).filter((v,i)=>GROUP_DATA[v].filter((v,i)=>v.to===topic).length>0)
        let selectedGroup = null;
        if(selectedGroupArray.length>0) selectedGroup = selectedGroupArray[0];
        setShow(props.group===selectedGroup);
    },[topic,props.group])

    return (
        <>
            <Link className={classes.left_pane_list_item} onClick={toggleGroupShowHandler}>
                <img src={require(`../images/${props.icon}`)} className={classes.list_logo} alt='link'/>
                <span>{props.title}</span>
                <img src={require('../images/dropdown.png')} className={`${classes.group_dropdown_icon} ${show&&classes.group_dropdown_icon_flip}`} alt='dropdown icon'/>
            </Link>
            <NavigationGroupList show={show}>
                {GROUP_DATA[props.group].map((v,i)=><NavigationLink key={`nl_${i}`} to={v.to} title={v.title} icon={v.icon}/>)}
            </NavigationGroupList>
        </>
    )
}

export default NavigationGroup;