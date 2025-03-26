import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const fetchWorkouts = async () => {
  const response = await axios.get(`${API_BASE_URL}/workouts`);
  return response.data;
};
