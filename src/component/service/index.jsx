import Http from "../server";

class Service {
  getData(data) {
    return Http.get("camera/get/" + data.page + "/" + data.limit);
  }
}
export default new Service();