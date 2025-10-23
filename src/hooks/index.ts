import { useSelector, useDispatch } from 'react-redux'
import type { AppSelector, AppDispatch } from '../store'

const useAppDispatch = useSelector.withTypes<AppDispatch>()
const useAppSelector = useDispatch.withTypes<AppSelector>()

export { useAppDispatch, useAppSelector }