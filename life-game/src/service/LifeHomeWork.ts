import lifeMatrixConfig from "../config/life-matrix.config";
import { getRandomMatrix } from "../utils/matrix";
import cloneDeep from 'lodash/cloneDeep';
export default class LifeMatrix{
    private _matrix: number[][];
    constructor(rows: number, columns: number){
        this._matrix = getRandomMatrix(rows,columns,0,1);
    }
    get matrix(){
        return this._matrix;
    }
    get rowsNum(){
        let rows: number = 0;
        return rows = lifeMatrixConfig.rows;
    }

    get colNum(){
        let columns: number = 0;
        return columns = lifeMatrixConfig.columns;
    }

    countOnesAround(matrix: number[][], i:number, j:number): number{
        const directions = [
          [-1, -1], [-1, 0], [-1, 1],  // above-left, above, above-right
          [0, -1],           [0, 1],   // left,         right
          [1, -1], [1, 0], [1, 1]      // below-left, below, below-right
        ];
      
        let count:number = 0;
        
        for (let [dx, dy] of directions) {
          const ni = i + dx;
          const nj = j + dy;
      
          if (
            ni >= 0 && ni < matrix[0].length && // columns
            nj >= 0 && nj < matrix.length       // rows
          ) {
            if (matrix[nj][ni] === 1) {
              count++;
            }
          }
        }
      
        return count;
      }

    next(): number[][] {
        //TODO
        // implementation of game of life algorithem
        let rowsN: number = this.rowsNum;
        let colN: number = this.colNum;
        let i,j;
        let tempMatrix =cloneDeep(this._matrix);
        for (i= 0; i < colN; i ++)
        {
            for(j = 0; j < rowsN; j++)
            {
                const value = tempMatrix[i][j];
                let count = 0;
                count = this.countOnesAround(tempMatrix, i, j)
                if (value == 1)
                { 
                    if (count == 2 || count == 3)
                        this._matrix[i][j] = 1;
                    else
                        this._matrix[i][j] = 0;
                }
                if (value == 0)
                    if (count == 3)
                        this._matrix[i][j] = 1;
            }
        }
        return this._matrix;
    }
}