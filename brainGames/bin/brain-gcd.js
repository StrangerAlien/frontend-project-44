#!/usr/bin/env node

import indexGame from '../src/index.js';
import { gcd, rules } from '../src/games/gcd.js';

indexGame(gcd, rules);
