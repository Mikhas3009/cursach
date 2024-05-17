import * as fs from 'fs';

interface Matrix {
    size: number;
    data: number[][];
}

class QuadraticAssignmentProblem {
    private matrixFirst: Matrix;
    private matrixSecond: Matrix;

    constructor() {
        this.matrixFirst = { size: 0, data: [] };
        this.matrixSecond = { size: 0, data: [] };
    }

    private readMatrix(inputLines: string[], matrix: Matrix): void {
        const size = matrix.size;
        matrix.data = [];

        for (let i = 0; i < size; ++i) {
            const row = inputLines.shift()?.split(' ').map(Number);
            if (row) matrix.data.push(row);
        }
    }

    public readFromFile(filename: string): void {
        const inputFile = fs.readFileSync(filename, 'utf-8').split('\n');

        this.matrixFirst.size = parseInt(inputFile.shift() || '0');
        this.readMatrix(inputFile, this.matrixFirst);

        this.matrixSecond.size = parseInt(inputFile.shift() || '0');
        this.readMatrix(inputFile, this.matrixSecond);
    }
}

const problem = new QuadraticAssignmentProblem();
problem.readFromFile("example1.txt");
