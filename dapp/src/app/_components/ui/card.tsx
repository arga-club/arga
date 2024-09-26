import * as React from 'react'
import styled from 'styled-components'
import { cn } from '~/lib/shadcn-utils'
import marbleBg from '~/images/marble-bg-3.jpg'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<MarbleDiv
		ref={ref}
		className={cn(
			'rounded-xl border border-b-gray-300 border-l-white border-r-gray-300 border-t-white bg-card text-card-foreground shadow-xl',
			className,
		)}
		{...props}
	/>
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
	),
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3 ref={ref} className={cn('font-semibold leading-none tracking-tight', className)} {...props} />
	),
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
	),
)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />,
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
	),
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

const MarbleDiv = styled.div`
	position: relative;
	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		transform: translate(-50%, -50%);
		background: url(${marbleBg.src});
		opacity: 0.4;
	}
	> * {
		position: relative;
	}
`
