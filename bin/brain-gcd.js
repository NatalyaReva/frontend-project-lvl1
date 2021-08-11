#!/usr/bin/env node

import greetings from '../src/greeting.js';
import getUserName from '../src/cli.js';
import questionNod from '../src/gcd.js';

greetings();
questionNod(getUserName());
