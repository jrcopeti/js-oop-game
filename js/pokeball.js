class Pokeball {
  constructor(x, y) {
    this.width = 20;
    this.height = 20;
    this.x = x;
    this.y = y;
    this.speed = 7;
    this.image = document.createElement("img");
    this.image.src = "../assets/pokeball-red.png";
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x += this.speed;
  }
}
console.log("Pokeball class loaded");
