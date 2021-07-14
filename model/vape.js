const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

class Vape {
  constructor(title, description, price, image) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.id = uuid();
  }

  async save() {
    const vapes = await Vape.getAll();

    vapes.push({
      title: this.title,
      description: this.description,
      price: this.price,
      image: this.image,
      id: this.id,
    });

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'vapes.json'),
        JSON.stringify(vapes),
        (error) => {
          if (error) reject(error);
          else resolve();
        }
      );
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'vapes.json'),
        'utf-8',
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(JSON.parse(data));
          }
        }
      );
    });
  }

  static async findOneById(id) {
    const vapes = await Vape.getAll();

    return vapes.find(vape => vape.id === id);
  }
}

module.exports = Vape;
