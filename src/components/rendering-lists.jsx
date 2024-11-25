import { people } from "./data.jsx";
import { getImageUrl } from "./utils";

export default function RenderingList() {
  return (
    <>
      <h1>Scientists</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}</b> <br />
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
            {person.msg ? <span>Hi</span> : <span>Bye</span>}
          </li>
        ))}
      </ul>
    </>
  );
}
