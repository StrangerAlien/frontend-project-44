install:
	npm ci

brain-games:
	bin/brain-games.js

brain-even:
	bin/brain-even.js

brain-calc:
	bin/brain-calc.js

brain-gcd:
	bin/brain-gcd.js

brain-progression:
	bin/brain-progression.js

brain-prime:
	bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
