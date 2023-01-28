class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    return this.repository.filter((item) => item['ID'] == id);
  }

  async getall() {
    return this.repository; 
  }
}

export default BaseService;