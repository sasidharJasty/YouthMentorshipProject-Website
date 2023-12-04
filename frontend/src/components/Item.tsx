
interface Props{
    url:string
    title:string
    description:string
}

export default function Item(props:Props){
    return(<div className="p-7">
        <img src={props.url}/>
        <h4 className="text-2xl font-medium ml-2" >{props.title}</h4>
        <p>{props.description}</p>
    </div>)
}