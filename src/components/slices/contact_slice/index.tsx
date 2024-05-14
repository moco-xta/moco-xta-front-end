import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { setCellState, setNextState } from '@/redux/slice/lifeGameSlice'

import './index.scss'
import { useDispatch } from 'react-redux'

const GRID_LENGTH = 12
const GRID_WIDTH = 12

const OPERATIONS = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
]

export default function ContactSlice() {

  const dispatch = useDispatch<AppDispatch>()
  const grid = useSelector(
    (state: RootState) => state.lifeGame.grid,
  )


  /* const [grid, setGrid] = useState<number[][]>(generateEmptyGrid()) */
  const [running, setRunning] = useState<boolean>(false)

  const runningRef = useRef<boolean>(running)
  runningRef.current = running

  function handleRunningClick() {
    setRunning(!running)
    if (!running) {
      runningRef.current = true
      runSimulation()
    }
  }

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return
    dispatch(setNextState())
    setTimeout(runSimulation, 1000)
  }, [])

  return (
    <div id='contact_slice'>
      <div id='grid_container'>
        {grid.map((column, columnIndex) => {
          return (
            <div
              key={`column_${columnIndex}`}
              className='column'
            >
              {column.map((row, rowIndex) => {
                const handleRowClick = () => {
                  dispatch(setCellState({ columnIndex: columnIndex, rowIndex: rowIndex }))
                }

                return (
                  <div
                    key={`row_${columnIndex}_${rowIndex}`}
                    className='row'
                    style={{ backgroundColor: row === 1 ? 'black' : 'white' }}
                    onClick={handleRowClick}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      <button onClick={handleRunningClick}>
        {!running ? 'Start' : 'Pause'}
      </button>
    </div>
  )
}
