import useOnline from "../../Hooks/useOnline"


export default function Online({children}) {

    let isonline = useOnline();
    if (isonline){
        return  children;
    }

}
