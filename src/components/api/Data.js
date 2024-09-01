import axios from "axios";
const getData = async () => {
  try {
   const response = await axios.get("http://localhost:5000/data");
    console.log("Data fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getData;
