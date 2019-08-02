import _ from 'https://dev.jspm.io/lodash@4.17.15';
import $ from 'https://dev.jspm.io/jquery@3.4.1';

// Import the jQuery 'pos' plugin
import './pos.js';

import gameLoop from './gameloop.js';

const paddle_a = $("#paddle_a");
const paddle_b = $("#paddle_b");

// Functions
const paddle_a_up = () => {
    paddle_a.pos({
        top: paddle_a.pos().top - 20,
    });
}

const paddle_a_down = () => {
    paddle_a.pos({
        top: paddle_a.pos().top + 20,
    });
}

const paddle_b_up = () => {
    paddle_b.pos({
        top: paddle_b.pos().top - 20,
    });
}

const paddle_b_down = () => {
    paddle_b.pos({
        top: paddle_b.pos().top + 20,
    });
}

$("body").on("keydown", (keyEvent) => {
    if (keyEvent.key == "w") {
        paddle_a_up();
    } else if (keyEvent.key == "s") {
        paddle_a_down();
    } else if(keyEvent.key == "o") {
        paddle_b_up();
    } else if (keyEvent.key == "l") {
        paddle_b_down();
    }
});

const ballSpeed = 1.33;
const ball = $('#ball');
ball.dx = -ballSpeed;
ball.dy = -ballSpeed;

const screen = $('#screen');

let score_a = 0;
let score_b = 0;

let screenPosition = screen.pos();
let ballPosition = ball.pos();

// Reset the ball position to the center of the screen
// and change direction to the other player
const resetBall = () => {
    ball.pos({ center: screenPosition.center });
    ball.dx = ball.dx * -1;
};

export const mainLoop = () => {
    screenPosition = screen.pos();
    ballPosition = ball.pos();

    // Move the ball
    ball.pos({
        top: ballPosition.top + ball.dy,
        left: ballPosition.left + ball.dx,
    });

    // Top and bottom
    if (ballPosition.top < screenPosition.top) {
        ball.pos({ top: screenPosition.top });
        ball.dy = ball.dy * -1;
    }

    if (ballPosition.bottom > screenPosition.bottom) {
        ball.pos({ bottom: screenPosition.bottom });
        ball.dy = ball.dy * -1;
    }

    // Left and right
    if(ballPosition.right > screenPosition.right) {
        score_a = score_a + 1;
        $("#player1 .score").text(`${score_a}`);
        resetBall();
    }

    if (ballPosition.left < screenPosition.left) {
        score_b = score_b + 1;
        $("#player2 .score").text(`${score_b}`);
        resetBall();
    }

    const paddle_a_position = paddle_a.pos();

    // Paddle a collision with the ball
    if(ballPosition.left < paddle_a_position.right &&
        ballPosition.bottom > paddle_a_position.top &&
        ballPosition.top < paddle_a_position.bottom) {

        ball.pos({ left: paddle_a_position.right });
        ball.dx = ball.dx * -1;
    }

    // Paddle b collision with the ball
    const paddle_b_position = paddle_b.pos();
    if (ballPosition.right > paddle_b_position.left &&
        ballPosition.bottom > paddle_b_position.top &&
        ballPosition.top < paddle_b_position.bottom) {

        ball.pos({ right: paddle_b_position.left });
        ball.dx = ball.dx * -1;
    }
};

gameLoop(mainLoop);
