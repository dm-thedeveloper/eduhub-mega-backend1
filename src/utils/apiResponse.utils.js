class APIResponse {
  constructor(message = "Success !!", data, statucode) {
    this.message = message;
    this.data = data;
    this.statucode = statucode;
  }
}

export default APIResponse;
