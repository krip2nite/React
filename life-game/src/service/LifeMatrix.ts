import { getRandomMatrix } from "../utils/matrix";
 
 export default class LifeMatrix {
     private _matrix: number[][];
     constructor(rows: number, columns: number) {
         this._matrix = getRandomMatrix(rows, columns, 0, 1);
 
     }
     get matrix() {
         return this._matrix;
     }
     
     next(): number[][] {
         //TODO
         //implementation of game of life algorith
         this._matrix = this._matrix.map((row, index) => this.newRow(row, index));
         return this._matrix
     }
     private newRow(row: number[], rIndex: number): number[] {
         return row.map((cell, cIndex) => this.newCell(cell, rIndex, cIndex))
     }
     private newCell(cell: number, rIndex: number, cIndex: number): number {
         const neighborsCount = this.getNeighborsCount(cell, rIndex, cIndex)
         return cell ? forPopulated(neighborsCount) : forUnPopulated(neighborsCount);
     }
     private getNeighborsCount(cell: number, i: number, j: number): number {
        const partialMatrix = this.getPartialMatrix(i, j);
        // let count =  partialMatrix.reduce((acc, cur) => acc + cur.reduce((acc, curr) => acc + curr), 0);
        // same code. flatMap - get all arrays into one array 
        let count = partialMatrix.flatMap(a => a).reduce((acc, cur) => acc + cur);
        cell && count --; // number of neighbors should not include the cell itself
        return count;
     }
     private getPartialMatrix(i: number, j: number): number[][] {
        const startIndex = j == 0 ? j : j - 1;
        const endIndex = j == this._matrix[0].length -1  ? j + 1 : j + 2;
        return [i - 1, i, i + 1]
        .map(rowIndex => this._matrix[rowIndex] ? this._matrix[rowIndex].slice(startIndex, endIndex) : [0])
     }
 }

function forPopulated(neighborsCount: number): number {
    return +(neighborsCount == 2 || neighborsCount == 3);
}
function forUnPopulated(neighborsCount: number): number {
    return +(neighborsCount == 3);
}
