interface Props {
  url: string;
  title: string;
  description: string;
}

export default function Item(props: Props) {
  return (
    <div className="p-4 Item relative shadow-lg pb-5 pt-5 mr-10 bg-white">
      <img src={props.url} className="w-full" />
      <h4 className=" font-semibold mb-2 mt-3 Item-h4">{props.title}</h4>
      <p className="mb-4  Item-p">{props.description}</p>
      <a href="#" className=" p-2 text-sm Item-btn transition rounded-xl ">
        Learn More
      </a>
    </div>
  );
}
