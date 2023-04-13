import { Link } from "react-router-dom";
import classes from "./Results.module.css"

//Data that the API must get
const RESULTS = [
  {
    id: "r1",
    title: "result 1",
    description: "r1 description",
    img: "r1 image",
  },
  {
    id: "r2",
    title: "result 2",
    description: "r2 description",
    img: "r2 image",
  },
  {
    id: "r3",
    title: "result 3",
    description: "r3 description",
    img: "r3 image",
  },
];

const Results = () => {
  return (
    <>
      <h1 className={classes.title}>Results</h1>
      <ul>
        {RESULTS.map((result) => (
          <li
            key={result.id}
            title={result.title}
            description={result.description}
            img={result.img}
          >
            <Link to={`/results/${result.id}`}>
              <div className={classes.eachResult}>
              <h1>{result.title}</h1> <p>{result.description}</p> <p>{result.img}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Results;
