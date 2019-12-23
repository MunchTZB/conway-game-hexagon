import Grid from './Grid.ts';
const canvas = document.createElement('canvas');
const nextTickButton = document.createElement('button');
nextTickButton.innerText = 'NextTick';
document.body.append(nextTickButton);
document.body.append(canvas);
canvas.height = 800;
canvas.width = 800;

const grid = new Grid(64, 64);
console.log(grid);
