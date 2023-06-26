import classes from '../style/Topic.module.css';

const TopicBody = (props) => {
    return (
        <div className={classes.body}>
            <div className={classes.steps}>
                {props.children}
            </div>
        </div>
    )
}

export default TopicBody;