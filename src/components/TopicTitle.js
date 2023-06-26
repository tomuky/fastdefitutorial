import classes from '../style/Topic.module.css';

const TopicTitle = (props) => {
    return (
        <h1>
            <img src={require(`../images/${props.icon}`)} alt='title icon' className={props.iconInvert&&classes.invert}/>    
            <span>{props.title}</span>
        </h1>
    )
}

export default TopicTitle;