'use client'

import { type ElementType, type ForwardRefRenderFunction, forwardRef } from 'react'

export const withDisplayName = <
	Props extends object,
	RootElement extends
		| ElementType
		| HTMLElement
		| HTMLDivElement
		| HTMLAnchorElement
		| HTMLButtonElement
		| HTMLSelectElement,
>(
	displayName: string,
	forwardRefRenderFunction: ForwardRefRenderFunction<RootElement, Props>,
) => {
	const WithForwardedRef = forwardRef(forwardRefRenderFunction)
	WithForwardedRef.displayName = displayName
	return WithForwardedRef
}
