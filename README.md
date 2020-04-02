[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/for-sharks.svg)](https://forthebadge.com)

[![LinkedIn-profile](https://img.shields.io/badge/LinkedIn-Unnikrishnan-green.svg)](https://www.linkedin.com/in/unnikrishnan-menon-aa013415a/) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![GitHub stars](https://img.shields.io/github/stars/7enTropy7/Cellular_Automata.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/7enTropy7/Cellular_Automata/stargazers/)

# Cellular_Automata

A cellular automaton is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states of neighboring cells. The rules are then applied iteratively for as many time steps as desired.

### Cloning Instruction
```bash
$ git clone https://github.com/7enTropy7/Cellular_Automata.git
```
___

## Game of Life

The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.

This repository contains: 
- [x] Interactive mode where you can initialize your own population on a grid. 
- [x] Randomized population mode.

### Rules
- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

### Output

Glider Gun in Interactive Mode:

![ezgif com-video-to-gif (9)](https://user-images.githubusercontent.com/36446402/77861926-b690d680-7235-11ea-87e9-97a9956556a5.gif)

Randomized Population:

![gol-2020-03-28_02 56 04](https://user-images.githubusercontent.com/36446402/77826791-86fba480-7137-11ea-86b0-86fa7d613ded.gif)

___
___

## Langton's Ant

Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior.

### Rules
- At a white square, turn 90° right, flip the color of the square, move forward one unit.
- At a black square, turn 90° left, flip the color of the square, move forward one unit.

### Output

![Langton](https://user-images.githubusercontent.com/36446402/77835826-a5cd5b80-7176-11ea-82db-6b953cd915db.png)

___
___

## Rule-30

Rule 30 is a Class III rule, displaying aperiodic, chaotic behaviour. This rule is of particular interest because it produces complex, seemingly random patterns from simple, well-defined rules.

### Rule set

| Current Pattern  | New state for center cell |
| ---      | ---       |
| 000 | 0 |          
| 001 | 1 | 
| 010 | 1 |
| 011 | 1 |
| 100 | 1 |
| 101 | 0 |
| 110 | 0 |
| 111 | 0 |

### Output

![rule_30](https://user-images.githubusercontent.com/36446402/78289484-e4c92b80-753f-11ea-8f32-d3d01ee0de92.png)

___
## Author
[![LinkedIn-profile](https://img.shields.io/badge/LinkedIn-Profile-teal.svg)](https://www.linkedin.com/in/unnikrishnan-menon-aa013415a/) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://www.quora.com/profile/Unnikrishnan-Menon-5)
* [**Unnikrishnan Menon**](https://github.com/7enTropy7) 

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details