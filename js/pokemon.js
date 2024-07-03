class Pokemon {
  constructor(canvas, imgSrc, score, name) {
    this.width = 70;
    this.height = 70;
    this.x = canvas.width;
    this.y = Math.max(
      85,
      Math.floor(Math.random() * (canvas.height - this.height))
    );
    this.speed = 3 ;
    this.score = score;
    this.name = name
    this.image = new Image();
    this.image.src = imgSrc;
    this.image.onload = () => {
      this.ready = true;
    };
  }

  draw(ctx) {
    if (this.ready) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  move() {
    this.x -= this.speed;
  }
}
