import { lazy, useEffect } from 'react'
import { useReconnect } from 'wagmi'

export const useAutoReconnect = () => {
	const { reconnect } = useReconnect()
	useEffect(() => {
		reconnect()
	}, [reconnect])
}

export const LazyReactJSON = lazy(() => import('react-json-view'))

export const sleep = (ms?: number) => new Promise(resolve => setTimeout(resolve, ms ?? 0))

export const doNothing = () => {
	// do nothing
}

export const createChangeEvent = <T extends HTMLInputElement>(name: string, value: string): React.ChangeEvent<T> =>
	({
		target: { value, name } as T,
		currentTarget: { value, name } as T,
		preventDefault: doNothing,
		stopPropagation: doNothing,
	}) as React.ChangeEvent<T>
