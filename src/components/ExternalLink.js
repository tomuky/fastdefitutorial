import classes from '../style/Topic.module.css';

const ExternalLink = (props) => {
    return (
        <>
            <a href={props.to} target='_blank' rel="noreferrer">
                {props.title}
                {props.icon&&<img alt='link icon' src={require(`../images/${props.icon}`)} className={classes.inline_icon}/>}
                <img alt='external link' src={require('../images/external-link-icon.png')} className={classes.inline_icon_external_link}/>
            </a>
        </>
    )
}

export default ExternalLink;