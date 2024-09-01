import { useParams } from "react-router-dom";
import getData from "./api/Data";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import open from "../../public/assets/shared/icon-view-image.svg";
export default function Innerpage() {
  const [data, setData] = useState([]);
  const { id } = useParams(); // الحصول على المعرف من الرابط
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromApi = await getData();
        const item = dataFromApi.find((item) => item.id === id); // البحث عن العنصر بناءً على المعرف
        setData(item);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <p>Loading data...</p>
        <Footer />
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Header />
        <p>Item not found.</p>
        <Footer />
      </>
    );
  }

  const name = data.name;
  const artName = data.artist.name;
  const artPhoto = data.artist.image;
  const photo = data.images.hero.large;
  const description = data.description;
  const year = data.year;
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
            <div className="text-2xl md:text-5xl font-bold">{name}</div>
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
              href={`https://en.wikipedia.org/wiki/${name.replace(
                /\s+/g,
                "_"
              )}`} // استبدال الفراغات بـ "_"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
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
