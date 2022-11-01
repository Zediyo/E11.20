module.exports = {
	"env": {
		"node": true,
		"commonjs": true,
		"es2021": true,
		"browser": true,
	},
	"extends":
	[
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"plugins":
	[
		"react"
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"eqeqeq": "error",
		"no-trailing-spaces": "error",
		"object-curly-spacing": [
			"error", "always"
		],
		"arrow-spacing": [
			"error", { "before": true, "after": true }
		],
		"no-console": 0,
		"brace-style": ["error", "allman", { "allowSingleLine": true } ],
	}
};
