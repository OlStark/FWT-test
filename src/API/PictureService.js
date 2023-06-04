import axios from "axios";
import { BASE_URL } from "../components/Helpers/Helper";

export default class PictureService {
  static async getPic(
    limit = 9,
    page = 1,
    q = "",
    authorId = 0,
    locationId = 0,
    firstNum = "",
    lastNum = ""
  ) {
    try {
      const response = await axios.get(BASE_URL + "/paintings", {
        params: {
          _limit: limit,
          _page: page,
          q: q,
          authorId: authorId,
          locationId: locationId,
          created_gte: firstNum,
          created_lte: lastNum,
        },
      });
      return response;
    } catch (e) {}
  }
  static async getAuthors() {
    try {
      const response = await axios.get(BASE_URL + "/authors");
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  static async getLocation() {
    try {
      const response = await axios.get(BASE_URL + "/locations");
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
