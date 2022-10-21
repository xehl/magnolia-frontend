import axios from "axios";
import { useEffect, useState } from "react";

export default function Browse() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4999/entries/").then((res) => {
      console.log(res.data.small);
      let arr = res.data.small
      setData(res.data.small.slice(arr.length - 5, arr.length));
    });
  }, []);

  return (
    <div>
      Browse all: 
      {data && data.map((entry) => {
        return (
          <div key={entry._id}>
            <div>{entry.author_fname}</div>
            <div>text is: {entry.text}</div>
          </div>
        )
      })}
    </div>
  )
}