import { useState, useEffect } from "react";
import axios from "axios";
import next from "../../public/assets/shared/icon-next-button.svg";
import back from "../../public/assets/shared/icon-back-button.svg";
export default function Footer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:5000/data");
      setData(response.data);
    }
    getData();
  }, []);

  const name = data.length > 0 ? data[0].name : "";
  const artName = data.length > 0 ? data[0].artist.name : "";

  return (
    <>
      <div className="flex w-auto md:w-full gap-[650px] relative  bottom-[-330px]">
        <div className="h-16 text-start font-custom bg-white w-full p-4">
          <span className="font-extrabold">{name} </span>
          <br />
          <span className="text-sm opacity-55">{artName}</span>
        </div>
        <div className="flex gap-12  relative -right-48 w-2/3 mr-14 md:mr-0 p-4">
          <img
            src={back}
            className="w-6 h-8 cursor-pointer hover:opacity-40"
          />
          <img
            src={next}
            className="w-6 h-8 cursor-pointer hover:opacity-40"
          />
        </div>
      </div>
    </>
  );
}
