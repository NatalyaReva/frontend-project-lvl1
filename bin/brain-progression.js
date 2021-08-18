#!/usr/bin/env node

import greetings from '../src/greeting.js';
import getUserName from '../src/cli.js';
import questionAnswer1 from '../src/games/progression.js';

greetings();
questionAnswer1(getUserName());
