#!/usr/bin/env node

import indexGame from '../src/index.js';
import { prime, rules } from '../src/games/prime.js';

indexGame(prime, rules);
