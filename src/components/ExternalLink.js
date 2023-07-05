import classes from '../style/Topic.module.css';

const ExternalLink = (props) => {
    return (
        <>
            <a href={props.to} target='_blank' rel="noreferrer">
                {props.title}
                <img alt='external link' src={require('../images/external-link-icon.png')} className={classes.inline_icon}/>
            </a>
            {props.icon&&<img alt='link icon' src={require(`../images/${props.icon}`)} className={classes.inline_icon}/>}
        </>
    )
}

export default ExternalLink;