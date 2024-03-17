import { parseEther } from 'viem'
import { z } from 'zod'

export const ethAddressSchema = z
	.string()
	.refine((value): value is `0x${string}` => /^0x[a-fA-F0-9]{40}$/.test(value), 'not a valid eth address')

export const bigIntDateSchema = z.date().transform(value => BigInt(value.valueOf()))

export const ethValueSchema = z.coerce.number().transform(value => parseEther(String(value)))

export const toHexString = (value: number) => `0x${value.toString(16)}`
