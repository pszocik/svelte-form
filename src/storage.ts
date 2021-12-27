import type { poolFormData } from './types'

export const addPool = (pool: poolFormData): void => {
  window.localStorage.setItem(pool.question, JSON.stringify(pool))
}

export const updatePool = (answer: string, poolName: string): void => {
  const pool = JSON.parse(window.localStorage.getItem(poolName)) as poolFormData
  if (answer === 'answer1') {
    pool.answer1.count += 1
  } else {
    pool.answer2.count += 1
  }
  window.localStorage.setItem(poolName, JSON.stringify(pool))
}

export const allStorage = () => {
  const archive = {}
  const keys = Object.keys(localStorage)
  let i = keys.length

  while (i--) {
    archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i])) as poolFormData
  }

  return archive
}

export const deletePool = (poolName: string): void => {
  window.localStorage.removeItem(poolName)
}
