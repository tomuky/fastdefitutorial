import classes from '../style/Topic.module.css';

const Step = (props) => {
    const numberString = `000${props.n}`.slice(-3);
    return (
        <div className={classes.item}>
            {props.n && <img className={classes.bullet} src={require(`../images/numbers/${numberString}.png`)} alt='bullet number'/>}
            {props.type==='indent' && <img src={require("../images/bullet-arrow-icon.png")} className={classes.bullet_indent} alt='bullet'/>}
            {props.type==='bonus' && <img src={require("../images/star-icon.png")} className={classes.bullet} style={{filter:'invert(0%)'}} alt='bonus'/>}
            {props.type==='info' && <img src={require("../images/info-icon.png")} className={classes.bullet_indent} style={{filter:'invert(0%)'}} alt='info'/>}
            {props.type==='warning' && <img src={require("../images/warning-icon.png")} className={classes.bullet} style={{filter:'invert(0%)'}} alt='warning'/>}
            {props.type==='caution' && <img src={require("../images/caution-icon.png")} className={classes.bullet_indent} style={{filter:'invert(0%)'}} alt='caution'/>}
            { (!props.n && !props.type) && <img src={require("../images/bullet-icon.png")} className={classes.bullet} alt='warning'/>}
            <span>{props.children}</span>
        </div>
    )
}

export default Step;