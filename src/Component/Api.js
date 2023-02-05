import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "./User";

export const Api = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => setlistOfUSer(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Container">
      {listOfUSer.map((e) => (
        <User key={e.id} user={e} />
      ))}
    </div>
  );
};
