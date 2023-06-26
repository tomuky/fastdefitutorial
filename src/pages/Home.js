import classes from '../style/Main.module.css';

const Home = () => {
    return (
        <div className={`${classes.main_pane}`}>
            <div className={classes.viewer}>
                {/* <MainPaneTitle topicID={props.topicID}/>
				{(content[props.topicID].descriptions && <MainPaneDescription topicID={props.topicID}/>)}
				{(content[props.topicID].list && <MainPaneList topicID={props.topicID}/>)}
				{(content[props.topicID].steps && <MainPaneSteps topicID={props.topicID}/>)} */}
			</div>
        </div>
    )
}

export default Home;