#!/usr/bin/env node

import indexGame from '../src/index.js';
import { evenGame, rules } from '../src/games/even.js';

indexGame(evenGame, rules);
