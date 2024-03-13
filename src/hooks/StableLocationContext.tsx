import { createContext, useContext, useRef, MutableRefObject } from 'react'
import { useLocation, Location } from 'react-router-dom'

const StableLocationContext = createContext<MutableRefObject<Location> | null>(null)

declare interface IStableLocationContextProvider {
  children: React.ReactNode
}
export const StableLocationContextProvider = ({ children }:IStableLocationContextProvider) => {
  const location = useLocation()
  const locationRef = useRef(location)
  return (
    <StableLocationContext.Provider value={locationRef}>
      {children}
    </StableLocationContext.Provider>
  )
}

export const useStableLocation = (): Location => {
  const locationRef = useContext(StableLocationContext)
  if (locationRef?.current === null)
    throw new Error('StableLocation context is not initialized')

  return locationRef?.current as Location
}
