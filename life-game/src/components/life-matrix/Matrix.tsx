import React , {useEffect, useState} from 'react'
import "./Matrix.css"
import LifeMatrix from '../../service/LifeMatrix'
import Lifehw from '../../service/LifeHomeWork';
interface Props{
    rows: number,
    columns: number,
    interval?: number
}

const Matrix: React.FC<Props> = ({rows, columns, interval=400}) => {
    // const [lifeMatrix] = useState(new LifeMatrix(rows, columns))
    // const [matrix, setMatrix] = useState(lifeMatrix.matrix);
    // useEffect(()=>{
    //     function tick(){
    //         setMatrix(lifeMatrix.next());
    //     }
    //     const intervalId = setInterval(tick, interval);
    //     return () => clearInterval(intervalId)
    // }, [interval])
    const [Lifehw] = useState(new LifeMatrix(rows, columns))
    const [matrix, setMatrix] = useState(Lifehw.matrix);
    useEffect(()=>{
        function tick(){
            let m = Lifehw.next()
            setMatrix(m);
            //console.log(m);
            
        }
        const intervalId = setInterval(tick, interval);
        return () => clearInterval(intervalId)
    }, [interval])
    function getCells(matrix: number[][]): React.ReactNode {
        return matrix.map((row, rowIndex) =>{
        return row.map((cell, cellIndex) => <div key = {`${rowIndex}-${cellIndex}`} className = {`cell ${cell? "cell-alive": "cell-dead"}`}>

            </div>)
        })
    }

    return (
    <div style={{display: 'grid', 
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                width: '80vh',
                height: '80vh'
    }}>
        {getCells(matrix)}
    </div>
    )
}

export default Matrix
