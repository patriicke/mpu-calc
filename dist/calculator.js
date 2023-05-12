"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
const add = (n1, n2) => n1 + n2 + 10;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;
exports.calculator = { add, multiply, divide, subtract };
