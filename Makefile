install:
	npm link

brain-games:
	bin/brain-games.js

brain-even:
	brainGames/bin/brain-even.js

brain-calc:
	brainGames/bin/brain-calc.js

brain-gcd:
	brainGames/bin/brain-gcd.js

brain-progression:
	brainGames/bin/brain-progression.js

brain-prime:
	brainGames/bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
