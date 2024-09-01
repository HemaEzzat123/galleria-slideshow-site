import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getData from "./api/Data";
import next from "../../public/assets/shared/icon-next-button.svg";
import back from "../../public/assets/shared/icon-back-button.svg";

export default function Footer() {
  const [data, setData] = useState({}); // Initialize as an object
  const { id } = useParams(); // Get the ID from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromApi = await getData();
        const item = dataFromApi.find((item) => item.id === id); // Find the item based on the ID
        console.log(item);
        setData(item || {}); // Handle if no item is found
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  // Convert id to a number to safely perform arithmetic operations
  const currentId = parseInt(id, 10);

  // Ensure id does not go below 1 or above 14
  const previousId = Math.max(currentId - 1, 1); // Prevent going below 1
  const nextId = Math.min(currentId + 1, 14); // Prevent exceeding 14

  const name = data?.name;
  const artName = data?.artist?.name;

  return (
    <div className="flex w-auto md:w-full gap-[650px] relative bottom-[-330px]">
      <div className="h-16 text-start font-custom bg-white w-full p-4">
        <span className="font-extrabold">{name} </span>
        <br />
        <span className="text-sm opacity-55">{artName}</span>
      </div>
      <div className="flex gap-12 relative -right-48 w-2/3 mr-14 md:mr-0 p-4">
        <Link to={`/inner-page/${previousId}`}>
          <img
            src={back}
            className="w-6 h-8 cursor-pointer hover:opacity-40"
            alt="Back"
          />
        </Link>
        <Link to={`/inner-page/${nextId}`}>
          <img
            src={next}
            className="w-6 h-8 cursor-pointer hover:opacity-40"
            alt="Next"
          />
        </Link>
      </div>
    </div>
  );
}
