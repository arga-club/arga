import { lazy, useEffect } from 'react'
import { useReconnect } from 'wagmi'

export const useAutoReconnect = () => {
	const { reconnect } = useReconnect()
	useEffect(() => {
		reconnect()
	}, [reconnect])
}

export const LazyReactJSON = lazy(() => import('react-json-view'))
