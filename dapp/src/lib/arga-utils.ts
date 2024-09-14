export const declarationStatus = {
	active: 0,
	proofSubmitted: 1,
	approved: 2,
	rejected: 3,
} as const

export const declarationStatusLabels = ['Active', 'Proof submitted', 'Approved', 'Rejected']

export const declarationStatusClasses = ['text-orange-500', 'text-blue-500', 'text-green-600', 'text-red-500']
