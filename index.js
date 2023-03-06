import * as modulos from './modulos/controller.js'
import chalk from 'chalk';

const suma = modulos.suma;
const multi = modulos.multiplica;

const m1 = suma(1,2)
const m2 = suma(4,5)

const multiplicaSumas = multi(m1,m2)

console.log(multiplicaSumas)

console.log(chalk.green('Hello world!'));