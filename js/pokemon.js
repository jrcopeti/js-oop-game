class Pokemon {
  constructor(canvas, imgSrc, score, name) {
    this.width = 70;
    this.height = 70;
    this.x = canvas.width;
    this.y = Math.max(
      85,
      Math.floor(Math.random() * (canvas.height - this.height))
    );
    this.speed = 3;
    this.score = score;
    this.name = name;
    this.image = new Image();
    this.image.src = imgSrc;
    this.state = "active";
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.ellipse(
      this.x + this.width / 2,
      this.y + this.height,
      this.width / 4,
      10,
      0,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fill();
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= this.speed;
  }

  captured() {
    captureAudio.play();
    this.image.src = "../assets/capture.png";
    this.speed = 0;
    setTimeout(() => {
      this.state = "remove";
    }, 100);
  }
}
