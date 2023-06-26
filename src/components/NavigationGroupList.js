import classes from '../style/Navigation.module.css'

const NavigationGroupList = (props) => {
    return (
        <div className={`${classes.inside_group_list} ${props.show&&classes.inside_group_list_show}`}>
            {props.children}
        </div>
    )
}

export default NavigationGroupList;