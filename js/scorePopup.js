class ScorePopup {
  constructor(x, y, score, color, image = null) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.color = color;
    this.image = image ? document.createElement("img") : null;
    image && (this.image.src = image);
    this.time = Date.now();
    this.duration = 1000;
  }

  draw(ctx) {
    let elapsedTime = Date.now() - this.time;
    let fade = 1 - elapsedTime / this.duration;
    ctx.font = "20px Arial";
    ctx.fillStyle = `rgba(${this.color}, ${fade})`;
    ctx.fillText(
      `${this.score > 0 ? "+" : ""}${this.score}`,
      this.x,
      this.y - elapsedTime * 0.02
    );
    this.image &&
      ctx.drawImage(
        this.image,
        this.x - 10,
        this.y - elapsedTime * 0.02,
        20,
        20
      );
  }

  isExpired() {
    return Date.now() - this.time >= this.duration;
  }
}
