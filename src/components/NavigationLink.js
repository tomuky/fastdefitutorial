import classes from '../style/Navigation.module.css';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const NavigationLink = (props) => {
    const {topic} = useParams();
    const selected = (props.to===topic);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onClickLinkHandler = target => {
        dispatch(uiActions.closePane())
        navigate(target)
    }

    return (
        <div onClick={()=>onClickLinkHandler(props.to)} className={`${classes.left_pane_list_item} ${selected&&classes.left_pane_list_item_selected}`}>
            <img src={require(`../images/${props.icon}`)} className={classes.list_logo} alt='link'/>
            <span>{props.title}</span>
        </div>
    )
}

export default NavigationLink;