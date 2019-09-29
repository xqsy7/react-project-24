import React,{Fragment} from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import Layout from "../layout";
import Cookies from "js-cookie";
export default (routes)=>{
    console.log(Cookies.get("token"))
    const eachRoutes = (route)=>{
        return <Route key={route.key}
        path={route.path}
        render={
            (props)=>{
                console.log(route.meta);
                return <Fragment>
                    <Route component={route.component}/>
                    <Redirect to={route.children[0].path==="/modifyMine"?route.path:route.children[0].path} meta={route.meta} {...props}/>
                    <Switch>
                        {
                            route.children.map((child)=>{
                                if(child.children){
                                    return eachRoutes(child);
                                }
                                if(Cookies.get("token") || route.path==="/login" || route.path==="/login"){
                                    return <Layout {...child}>
                                    <Route path={child.path} key={child.key} component={child.component} meta={child.meta} {...props}/>
                                    </Layout>
                                    
                                }else{
                                    return <Redirect to={{pathname:"/login",state:{from:child.path}}}/>
                                }   
                            })
                        }
                    </Switch>
                </Fragment>
            }
        }
        />
    }
    
    
    return routes.map((route)=>{
        if(route.children){
            return eachRoutes(route);
        }else{
            return <Route path={route.path} key={route.key} render={
                (props)=>{
                    if(!route.meta.requireAuth || Cookies.get("token") || route.path==="/login" ||route.path==="/register"){
                        return <Layout {...route}>
                        <route.component {...props} name={route.name} meta={route.meta}/>
                        </Layout>
                    }else{
                        return <Redirect to={{pathname:"/login",state:{from:route.path}}}/>
                    }
                }
            }/>
        }
    })
}