interface Props {
  url: string;
  title: string;
  description: string;
  link: string;
}

export default function Item(props: Props) {
  return (
    <div className="p-4 Item relative shadow-lg pb-5 pt-5 mr-10 bg-white z-50">
      <img src={props.url} className="w-full" />
      <h4 className="font-semibold mb-2 mt-3 Item-h4">{props.title}</h4>
      <p className="mb-4 Item-p">{props.description}</p>
      <a href={props.link} className="p-2 px-3 Item-btn transition rounded-xl">
        Learn More
      </a>
    </div>
  );
}
