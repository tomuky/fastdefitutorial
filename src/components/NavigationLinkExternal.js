import classes from '../style/Navigation.module.css';

const NavigationLinkExternal = (props) => {

    return (
        <a target='_blank' rel="noreferrer" href={props.to} className={`${classes.left_pane_list_item}`}>
            <img src={require(`../images/${props.icon}`)} className={classes.list_logo} alt='external'/>
            <span>{props.title}</span>
        </a>
    )
}

export default NavigationLinkExternal;