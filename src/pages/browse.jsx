import axios from "axios";
import { useEffect, useState } from "react";

export default function Browse() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4999/entries/").then((res) => {
      console.log(res.data.small);
      setData(res.data.small);
    });
  }, []);

  return (
    <div>
      Browse all: 
      {data && data.map((entry) => <div key={entry._id}>{entry.author_fname}</div>)}
    </div>
  )
}