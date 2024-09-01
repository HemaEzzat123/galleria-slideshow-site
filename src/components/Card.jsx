import { Link } from "react-router-dom";
import getData from "./api/Data";
import { useState, useEffect } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const dataFromApi = await getData();
      setData(dataFromApi);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 hm m-auto w-[88vw] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
      {loading ? (
        <p>Loading data...</p>
      ) : (
        data.map((item, index) => (
          <div
            className={`relative mosaic text-white h-fit div${index + 1}`}
            key={item.id}
          >
            {/* Image with alt attribute */}
            <Link to={`/inner-page/${item.id}`}>
              <img
                src={item.images.thumbnail}
                alt={item.name}
                className="w-full relative hover:opacity-70 transition duration-500 ease-in-out"
              />
            </Link>
            <div className="absolute bottom-12 left-6  ">
              <h1 className="text-2xl  font-semibold text-white w-52 text-start ">
                {item.name}
              </h1>

              {/* Artist name overlay */}
              <p className="   text-[#d9d9d9] opacity-90 text-start ">
                {item.artist.name}
              </p>
            </div>
            {/* Title overlay */}
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
