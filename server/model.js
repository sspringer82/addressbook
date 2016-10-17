const model = {

  data: [],

  getNextId() {
    let max = 0;
    for(let i = 0; i < this.data.length; i++) {
      if (this.data[i]['id'] > max) {
        max = this.data[i]['id'];
      }
    }
    return max + 1;
  },

  get(id) {
    return this.data.find(element => {
      return element.id == id;
    });
  },

  getAll() {
    return this.data;
  },

  create(address) {
    address.id = this.getNextId();
    this.data.push(address);
    return address;
  },

  update(address, id) {
    const index = this.data.findIndex((element) => {
      return element.id == id;
    });
    address.id = id;
    this.data[index] = address;
    return address;
  },

  delete(id) {
    const index = this.data.findIndex((element) => {
      return element.id === id;
    });
    const result = this.data.splice(index, 1);
    return result.length === 1;
  }
};

module.exports = model;
