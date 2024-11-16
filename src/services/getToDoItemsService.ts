import axios from 'axios';

const GetToDoItems = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`);

  return response.data;
};

export default GetToDoItems;
