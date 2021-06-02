export default class Ball {
   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }

   draw(context) {
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      context.fill();
   }

   update(width, height) {
      if (this.x + this.size >= width) {
         this.velX = -this.velX;
      }

      if (this.x - this.size <= 0) {
         this.velX = -this.velX;
      }

      if (this.y + this.size >= height) {
         this.velY = -this.velY;
      }

      if (this.y - this.size <= 0) {
         this.velY = -this.velY;
      }

      this.x += this.velX;
      this.y += this.velY;
   }

   collisionDetect(balls) {
      for (var j = 0; j < balls.length; j++) {
         if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
               this.color = "rgb(" + randNum(0, 255) + "," + randNum(0, 255) + "," + randNum(0, 255) + ")";
               balls[j].color = "rgb(" + randNum(0, 255) + "," + randNum(0, 255) + "," + randNum(0, 255) + ")";
            }
         }
      }
   }
}


/**
 * Helper functions
 */
const randNum = (min, max) => {
   return Math.floor(Math.random() * (max - min)) + min;
};


export { randNum };
