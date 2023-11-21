import classes from '../style/Topic.module.css';
import { Link } from 'react-router-dom';

const InternalLink = (props) => {
    return (
        <>
            <Link to={props.to}>
                {props.title}
            </Link>
            {props.icon && <img alt='link icon' src={require(`../images/${props.icon}`)} className={classes.inline_icon}/>}
        </>
    )
}

export default InternalLink;