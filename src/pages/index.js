import Loadable from "react-loadable";
import Loading from "@common/loading";

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
}) 

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

const Register = Loadable({
    loader:()=>import("./register"),
    loading:Loading
})

const Classification = Loadable({
    loader:()=>import("./classification"),
    loading:Loading
})

const ShoppingCar = Loadable({
    loader:()=>import("./shoppingCar"),
    loading:Loading
})

const Details = Loadable({
    loader:()=>import("./details"),
    loading:Loading
})

export {
    ShoppingCar,
    Classification,
    Register,
    Login,
    Mine,
    Home,
    Details
}