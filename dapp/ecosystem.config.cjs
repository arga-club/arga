module.exports = {
	apps: [
		{
			name: 'arga',
			script: 'pnpm start',
			merge_logs: true,
			out_file: './logs/arga-logs-combined.log',
			error_file: './logs/arga-logs-combined.log',
		},
	],
}
