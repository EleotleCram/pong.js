
# Pong.js - Pong for Newbie Coders

## Introduction

This github project is intended as an educational tool for teaching beginners the fundamentals of programming.

Pong.js is a very simple game as a basis for programming exercises in the hope that using a simple visual game makes it easier to relate and reason about what is happening and how to solve common programming problems.

## Prerequisites

To do these exercises you will need:

* A recent version of [Chrome](https://www.google.com/chrome/)
* A good source code editor, such as [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/)
* A minimal local webserver¹ (See [these instructions](doc/webserver-installation.md) to install one inside Chrome itself.)

¹ This example uses modern Javascript module syntax which, unfortunately, does not allow you to use `file://` any more.

## Online demo

An online demo of pong.js is available [here](https://eleotlecram.github.io/pong.js/pong.html)

## Exercises

Here are some exercises to play with. They have been grouped based on difficulty. They have no particular order, you can attempt them in any order you like.

### Easy

* **Exercise:** The ball is moving very slowly. Can you make the ball go a little faster?
* **Exercise:** Can you change the ball color?
* **Exercise:** In the score board the players are colored differently, but their paddles are both white. Can you color each of the player paddles in their own player's color?
* **Exercise:** Can you prevent the paddles from moving off the top and bottom of screen?
* **Exercise:** Can you make the ball go increasingly faster, every time a player plays back the ball? (First do the exercise in which you make the ball go faster.)

### Intermediate

* **Exercise:** Can you change the ball color into the color of the last player who played the ball?
* **Exercise:** The game now always starts with the ball heading towards player 1's paddle. Can you make the game start with the ball going randomly at one of the two players?
* **Exercise:** Can you make the ball round?
* **Exercise:** Can you turn this game into a game of squash in which both players are at the same side and need to take turns when playing back the ball. (Hint: First do the last-player ball color change exercise, it will prime your thought process a little, making this exercise a little easier.)
* **Exercise:** Can you make the game stop when one player has scored 10 points and announce the winner? (Note: you can make the game loop stop by using `gameLoop.stop();`)
* **Exercise:** Can you turn this game into a single player game, such that player 2 is played by the computer and always plays back the ball? (It would be impossible to win from this computer player, but a good exercise to test your insights and programming skills.)

### Challenging
* **Exercise:** In one of the intermediate exercises you are asked to turn this game into a basic single-player game. But the computer was probably nearly unbeatable. Can you turn your game into a more challenging game?
* **Exercise:** Can you introduce some sort of 'top-spin' game element, in which you change the angle of the ball based on where on the paddle you hit the ball?
