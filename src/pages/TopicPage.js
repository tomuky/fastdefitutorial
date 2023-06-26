import { lazy,Suspense } from "react";
import { useParams } from "react-router-dom";

const TopicPage = (props) => {
    const params = useParams();

    const tryComponent = (name) => {
        try{
            return require(`../topics/${name.toLowerCase()}.js`);
        }catch(err){
            return null;
        }
    }

    let Component;
    if(tryComponent(params.topic)){
        Component = lazy(()=>import(`../topics/${params.topic.toLowerCase()}.js`));
    }else{
        Component = lazy(()=>import(`../topics/oops.js`));
    }

    return <>
        <Suspense fallback={<div></div>}>
            <Component/>
        </Suspense>
    </>
}

export default TopicPage;