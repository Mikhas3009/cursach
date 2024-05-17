"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
class QuadraticAssignmentProblem {
    constructor() {
        this.matrixFirst = { size: 0, data: [] };
        this.matrixSecond = { size: 0, data: [] };
    }
    readMatrix(inputLines, matrix) {
        var _a;
        const size = matrix.size;
        matrix.data = [];
        for (let i = 0; i < size; ++i) {
            const row = (_a = inputLines.shift()) === null || _a === void 0 ? void 0 : _a.split(' ').map(Number);
            if (row)
                matrix.data.push(row);
        }
    }
    readFromFile(filename) {
        const inputFile = fs.readFileSync(filename, 'utf-8').split('\n');
        this.matrixFirst.size = parseInt(inputFile.shift() || '0');
        this.readMatrix(inputFile, this.matrixFirst);
        this.matrixSecond.size = parseInt(inputFile.shift() || '0');
        this.readMatrix(inputFile, this.matrixSecond);
    }
}
const problem = new QuadraticAssignmentProblem();
problem.readFromFile("example1.txt");
