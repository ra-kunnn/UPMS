
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #4e7ccb 
		"--color-primary-50": "228 235 247", // #e4ebf7
		"--color-primary-100": "220 229 245", // #dce5f5
		"--color-primary-200": "211 222 242", // #d3def2
		"--color-primary-300": "184 203 234", // #b8cbea
		"--color-primary-400": "131 163 219", // #83a3db
		"--color-primary-500": "78 124 203", // #4e7ccb
		"--color-primary-600": "70 112 183", // #4670b7
		"--color-primary-700": "59 93 152", // #3b5d98
		"--color-primary-800": "47 74 122", // #2f4a7a
		"--color-primary-900": "38 61 99", // #263d63
		// secondary | #80ac87 
		"--color-secondary-50": "236 243 237", // #ecf3ed
		"--color-secondary-100": "230 238 231", // #e6eee7
		"--color-secondary-200": "223 234 225", // #dfeae1
		"--color-secondary-300": "204 222 207", // #ccdecf
		"--color-secondary-400": "166 197 171", // #a6c5ab
		"--color-secondary-500": "128 172 135", // #80ac87
		"--color-secondary-600": "115 155 122", // #739b7a
		"--color-secondary-700": "96 129 101", // #608165
		"--color-secondary-800": "77 103 81", // #4d6751
		"--color-secondary-900": "63 84 66", // #3f5442
		// tertiary | #e7be9a 
		"--color-tertiary-50": "251 245 240", // #fbf5f0
		"--color-tertiary-100": "250 242 235", // #faf2eb
		"--color-tertiary-200": "249 239 230", // #f9efe6
		"--color-tertiary-300": "245 229 215", // #f5e5d7
		"--color-tertiary-400": "238 210 184", // #eed2b8
		"--color-tertiary-500": "231 190 154", // #e7be9a
		"--color-tertiary-600": "208 171 139", // #d0ab8b
		"--color-tertiary-700": "173 143 116", // #ad8f74
		"--color-tertiary-800": "139 114 92", // #8b725c
		"--color-tertiary-900": "113 93 75", // #715d4b
		// success | #82a33f 
		"--color-success-50": "236 241 226", // #ecf1e2
		"--color-success-100": "230 237 217", // #e6edd9
		"--color-success-200": "224 232 207", // #e0e8cf
		"--color-success-300": "205 218 178", // #cddab2
		"--color-success-400": "168 191 121", // #a8bf79
		"--color-success-500": "130 163 63", // #82a33f
		"--color-success-600": "117 147 57", // #759339
		"--color-success-700": "98 122 47", // #627a2f
		"--color-success-800": "78 98 38", // #4e6226
		"--color-success-900": "64 80 31", // #40501f
		// warning | #d5b91e 
		"--color-warning-50": "249 245 221", // #f9f5dd
		"--color-warning-100": "247 241 210", // #f7f1d2
		"--color-warning-200": "245 238 199", // #f5eec7
		"--color-warning-300": "238 227 165", // #eee3a5
		"--color-warning-400": "226 206 98", // #e2ce62
		"--color-warning-500": "213 185 30", // #d5b91e
		"--color-warning-600": "192 167 27", // #c0a71b
		"--color-warning-700": "160 139 23", // #a08b17
		"--color-warning-800": "128 111 18", // #806f12
		"--color-warning-900": "104 91 15", // #685b0f
		// error | #c0664b 
		"--color-error-50": "246 232 228", // #f6e8e4
		"--color-error-100": "242 224 219", // #f2e0db
		"--color-error-200": "239 217 210", // #efd9d2
		"--color-error-300": "230 194 183", // #e6c2b7
		"--color-error-400": "211 148 129", // #d39481
		"--color-error-500": "192 102 75", // #c0664b
		"--color-error-600": "173 92 68", // #ad5c44
		"--color-error-700": "144 77 56", // #904d38
		"--color-error-800": "115 61 45", // #733d2d
		"--color-error-900": "94 50 37", // #5e3225
		// surface | #616781 
		"--color-surface-50": "231 232 236", // #e7e8ec
		"--color-surface-100": "223 225 230", // #dfe1e6
		"--color-surface-200": "216 217 224", // #d8d9e0
		"--color-surface-300": "192 194 205", // #c0c2cd
		"--color-surface-400": "144 149 167", // #9095a7
		"--color-surface-500": "97 103 129", // #616781
		"--color-surface-600": "87 93 116", // #575d74
		"--color-surface-700": "73 77 97", // #494d61
		"--color-surface-800": "58 62 77", // #3a3e4d
		"--color-surface-900": "48 50 63", // #30323f
		
	}
}