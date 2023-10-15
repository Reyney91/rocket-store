import axios from "axios";
const baseURL = "https://api.spacexdata.com/v3/rockets/";
export const rocketsService = {
  async getAll() {
    const responce = await axios.get(baseURL);
    return responce.data;
  },
  async getOne(rocket_id: string | undefined) {
    try {
      const responce = await axios.get(baseURL + rocket_id);
      return responce.data;
    } catch (err) {
      return null;
    }
  },
};
