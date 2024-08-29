import axios from "axios";
import { useState, useEffect } from "react";
const Card = () => {
  const [data, setData] = useState([]);

  // Function to fetch data
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 hm m-auto w-[88vw] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            className={`relative mosaic text-white h-fit div${index + 1}`}
            key={index}
          >
            {/* Image with alt attribute */}
            <img
              src={item.images.thumbnail}
              alt={item.name}
              className="w-full relative"
            />
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
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Card;
