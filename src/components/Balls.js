import React, { Component } from 'react';
import styled from "styled-components";
import Ball, { randNum } from '../scripts/ball';


const Canvas = styled.canvas`
  margin: 0;
  padding: 0;
  width: inherit;
  height: inherit;
`;

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  padding-top: 1.5rem;
`;



export default class Balls extends Component {
   constructor(props) {
      super(props);

      this.state = {
         balls: [],
      };

      this.makeBalls = this.makeBalls.bind(this);
      this.loop = this.loop.bind(this);
   }

   componentDidMount() {
      const canvas = document.getElementById('ballCanvas');
      const ctx = canvas.getContext('2d');

      // NOTE: We are setting both width AND canvas.width... same for height
      const width = canvas.width = canvas.clientWidth;
      const height = canvas.height = canvas.getBoundingClientRect().height; // can use above way

      this.makeBalls(width);
      this.loop(width, height, ctx);
   }

   componentWillUnmount() {
      this.setState({ balls: [] });
   }

   makeBalls(width) {
      const myBalls = [];
      while (myBalls.length < 50) {
         /**
          * ball position always drawn at least one ball width
          * away from the edge of the canvas, to avoid drawing errors
          */
         var size = randNum(3, 7);
         var x = randNum(0 + size, width - size);
         var y = randNum(0 + size, width - size);
         var color = 'rgb(' + randNum(0, 255) + ',' + randNum(0, 255) + ',' + randNum(0, 255) + ')';

         var velX = 0;
         var velY = 0;
         while (velX === 0 || velY === 0) {
            velX = randNum(-6, 6);
            velY = randNum(-6, 6);
         }

         // Create a new ball
         var ball = new Ball(x, y, velX, velY, color, size);
         myBalls.push(ball);
      }
      // Update the state
      this.setState({
         balls: [...myBalls]
      });
   }

   loop(width, height, context) {
      context.fillStyle = 'rgba(0, 0, 0, 0.25)';
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < this.state.balls.length; i++) {
         this.state.balls[i].draw(context);
         this.state.balls[i].update(width, height);
         this.state.balls[i].collisionDetect(this.state.balls);
      }

      requestAnimationFrame(() => { this.loop(width, height, context) });
   }

   render() {
      return (
         <Div>
            <Canvas id="ballCanvas" />
         </Div>
      );
   }
}
