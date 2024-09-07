install:
	npm ci

brain-games:
	brainGames/bin/brain-games.js

brain-even:
	brainGames/bin/brain-even.js

brain-calc:
	brainGames/bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
