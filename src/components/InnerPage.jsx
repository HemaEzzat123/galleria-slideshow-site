import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import open from "../../public/assets/shared/icon-view-image.svg";
export default function Innerpage() {
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
  const artPhoto = data.length > 0 ? data[0].artist.image : "";
  const photo = data.length > 0 ? data[0].images.hero.large : "";
  const description = data.length > 0 ? data[0].description : "";
  const year = data.length > 0 ? data[0].year : "";

  return (
    <>
      <Header />
      <div className="font-custom h-[600px] w-[88vw] m-auto flex items-center justify-around gap-[800px] ">
        <div className="w-full  md:w-96 md:h-96 md:mt-24 md:mb-16 ">
          <div className="w-[700px] ">
            <img className="md:w-[550px]  w-3/4 " src={photo} />
            <div className="bg-black h-7 gap-5 opacity-65 font-custom  text-white w-32 text-[10px] p-2 relative bottom-7 md:bottom-10 md:left-6 cursor-pointer hover:opacity-40 flex">
              <img className="w-3" src={open} /> VIEW IMAGE
            </div>
          </div>

          <div className="w-96 md:w-80 bg-white  md:p-10 relative  bottom-6  text-center md:bottom-[680px] md:left-[450px]">
            <div className="text-4xl md:text-6xl font-bold">{name}</div>
            <br />
            <div className="text-md opacity-55">{artName}</div>
          </div>

          <img
            src={artPhoto}
            className="relative md:bottom-[340px] md:left-[580px]"
          />
        </div>
        <div className="w-[700px]  relative text-start opacity-65   ">
          <div className="mt-[400px] w-80">
            {description}
            <br />
            <br />
            <br />
            <br />
            <br />
            <a
              href="https://en.wikipedia.org/wiki/The_Starry_Night"
              className="text-sm underline font-custom decoration-solid"
            >
              Go To Source
            </a>
          </div>

          <div
            style={{ "font-size": "250px" }}
            className="text-9xl font-extrabold opacity-5 relative  left-16   md:bottom-[580px]  md:left-[-10px]"
          >
            {year}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
