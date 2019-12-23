import Grid from './Grid.ts';
const canvas = document.createElement('canvas');
document.body.append(canvas);
canvas.height = 800;
canvas.width = 800;

const grid = new Grid();
console.log(grid)
