import classes from '../style/Topic.module.css';

const TopicDescription = (props) => {
    return (
        <div className={classes.description}>
            {props.children}
        </div>
    )
}

export default TopicDescription;