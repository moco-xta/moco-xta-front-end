import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { setCellState, setNextState } from '@/redux/slice/lifeGameSlice'

import './index.scss'

const COLORS = [
  '#1984c5',
  '#22a7f0',
  '#63bff0',
  '#a7d5ed',
  '#e2e2e2',
  '#e1a692',
  '#de6e56',
  '#e14b31',
  '#c23728',
]

export default function LifeGame() {
  const dispatch = useDispatch<AppDispatch>()
  const grid = useSelector((state: RootState) => state.lifeGame.grid)

  /* const [grid, setGrid] = useState<number[][]>(generateEmptyGrid()) */
  const [running, setRunning] = useState<boolean>(false)

  const runningRef = useRef<boolean>(running)
  runningRef.current = running

  useEffect(() => {
    if (!running) {
      setRunning(!running)
      if (!running) {
        runningRef.current = true
        runSimulation()
      }
    }
  }, [grid])

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return
    dispatch(setNextState())
    setTimeout(runSimulation, 60000 / 72)
  }, [])

  return (
    <div id='grid_container'>
      {grid.map((column, columnIndex) => {
        return (
          <div
            key={`column_${columnIndex}`}
            className='column'
          >
            {column.map((row, rowIndex) => {
              const handleRowClick = () => {
                dispatch(
                  setCellState({
                    columnIndex: columnIndex,
                    rowIndex: rowIndex,
                  }),
                )
              }

              return (
                <div
                  key={`row_${columnIndex}_${rowIndex}`}
                  className='row'
                  style={{
                    /* backgroundColor: COLORS[Math.round(rowIndex / 2)], */
                    backgroundColor: '#ff0000',
                    boxShadow:
                      row === 1
                        ? 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                        : 'none',
                    opacity: row === 1 ? 1 : 0,
                  }}
                  onClick={handleRowClick}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
