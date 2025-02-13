import useOnline from "../../Hooks/useOnline";


export default function Offline({children}) {
  let isonline=useOnline();
  if(!isonline) return children
}
