import { Link } from "react-router-dom";

const Home = ({data}) => {
  return (
    <>
    <h1>Lista de tareas</h1>
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <Link to={`/${item._id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
    </>
  )
};

export default Home;
