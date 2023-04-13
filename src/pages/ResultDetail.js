import { Link, useParams } from "react-router-dom";

const ResultDetailPage = (props) => {
  const params = useParams();
  const resultLink = "Insert link from API";

  return (
    <>
      <h1>Result Details</h1>
      <p>{params.resultId}</p>
      <h1>{props.title}</h1>
      <p>
        <Link to=".." relative="path">
          Voltar
        </Link>
      </p>

      <p>
        <Link to={resultLink}>Ir para o anúncio</Link>
      </p>
    </>
  );
};

export default ResultDetailPage;