import { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";
import "./lists.css";

interface Inputs {
  cat: string;
  top: string;
  subTop: string;
  handleClick: (item) => void;
  end: string;
  nextmenu: string;
}

function List(props: Inputs) {
  // const history = useNavigation();

  const [cat, setCat] = useState(["null"]);
  const [top, setTop] = useState(["null"]);
  const [subtop, setSubTop] = useState(["null"]);
  const [seltop, setselTop] = useState("null");
  const [selsubtop, setselSubTop] = useState("null");
  var CategorySel = JSON.parse(
    localStorage.getItem("CategorySelected") || "{ind:-1}"
  );
  var TopicSel = JSON.parse(
    localStorage.getItem("TopicSelected") || "{ind:-1}"
  );
  var SubTopicSel = JSON.parse(
    localStorage.getItem("SubTopicSelected") || "{ind:-1}"
  );

  const [selIndex, setselIndex] = useState(-1);
  const [selIndex2, setselIndex2] = useState(-1);
  const [selIndex3, setselIndex3] = useState(-1);
  async function data(list: string) {
    try {
      const response = await fetch(list, {
        headers: {
          Accept: "application/json",
        },
      });
      const resps = await response.json();

      return resps;
    } catch (err) {
      return ["ERROR"];
    }
  }

  //const [cat, setBody] = useState(["Loading"]);

  async function rTop(st) {
    if (st !== "null" && st !== undefined) {
      const _body = await data(props.top + "/" + st + "/topics");
      setSubTop(["null"]);
      setselTop(st);
      setTop(_body);
    } else {
      setselTop("null");
    }
  }
  async function rSubTop(st: string) {
    if (st !== "null" && st !== undefined) {
      const _body2 = await data(props.subTop + "/" + st + "/subtopics");
      setSubTop(_body2);

      setselSubTop(st);
    } else {
      setSubTop(["null"]);
      setselSubTop("null");
    }
  }
  useEffect(() => {
    (async () => {
      const _body = await data(props.cat);
      setselIndex(CategorySel["ind"]);
      setselIndex2(TopicSel["ind"]);
      setselIndex3(SubTopicSel["ind"]);
      try {
        rTop(CategorySel["num"]);
      } catch {
        rTop("null");
      }
      try {
        rSubTop(TopicSel["num"]);
      } catch {
        rSubTop("null");
      }
      if (_body[0] !== "Loading ...") {
        setCat(_body);
      }
      try {
        props.handleClick(SubTopicSel["num"]);
      } catch {
        props.handleClick("null");
      }
    })();
  }, []);

  return (
    <div className="">
      {/* {body[0] === "Loading ..." ? null : body[0][props.Query]} */}
      <div className="listContent list-group list-group-flush rounded">
        <h3 className="list-title">Category</h3>
        <ul className="list-group-item rounded" key="Category">
          {cat.map((item, index) => (
            <li
              className={
                selIndex === index
                  ? "list-group-item rounded active fw-bold "
                  : "list-group-item rounded"
              }
              data-toggle="list"
              key={item["name"]}
              role="tab"
              onClick={() => (
                rTop(item["id"]),
                localStorage.setItem("Selected", JSON.stringify(" Topic ")),
                localStorage.setItem(
                  "CategorySelected",
                  JSON.stringify({ ind: index, num: item["id"] })
                ),
                setselIndex(index),
                setselSubTop("null"),
                setselIndex2(-1),
                props.handleClick(["null"]),
                setselIndex3(-1)
              )}
            >
              {item["name"]}
            </li>
          ))}
        </ul>
      </div>

      {seltop !== "null" ? (
        <div className="listContent list-group rounded list-group-flush">
          <h3 className="list-title">Topic</h3>
          <ul className="list-group-item rounded" key="Topic">
            {top.map((item, index) => (
              <li
                className={
                  selIndex2 === index
                    ? "list-group-item active  rounded fw-bold "
                    : "list-group-item rounded"
                }
                key={item["name"]}
                onClick={() => (
                  rSubTop(item["id"]),
                  setselIndex2(index),
                  localStorage.setItem(
                    "Selected",
                    JSON.stringify(" Subtopic ")
                  ),
                  localStorage.setItem(
                    "TopicSelected",
                    JSON.stringify({ ind: index, num: item["id"] })
                  ),
                  // localStorage.setItem("TopicSelected", JSON.stringify(index)),
                  props.handleClick(["null"]),
                  setselIndex3(-1),
                  console.log(item["id"])
                )}
              >
                {item["name"]}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {selsubtop !== "null" ? (
        <div className="listContent list-group list-group-flush rounded ">
          <h3 className="list-title">Sub Topic</h3>
          <ul className="list-group-item rounded" key="SubTopic">
            {subtop[0] !== "null"
              ? subtop.map((item, index) => (
                  <li
                    key={item["name"]}
                    className={
                      selIndex3 === index
                        ? "list-group-item rounded active fw-bold "
                        : "list-group-item rounded"
                    }
                    onClick={() => (
                      setselIndex3(index),
                      props.handleClick(item["id"]),
                      localStorage.setItem(
                        "SubTopicSelected",
                        JSON.stringify({ ind: index, num: item["id"] })
                      ),
                      console.log(item["id"])
                    )}
                  >
                    {item["name"]}
                  </li>
                ))
              : props.handleClick(["random"])}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default List;
