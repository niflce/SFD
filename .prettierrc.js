module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  semi: false,
  quoteProps: 'as-needed',
  overrides: [
		{
	    files: '*.js',
	    options: {
				parser: 'babel'
	    }
		}
  ]
}
