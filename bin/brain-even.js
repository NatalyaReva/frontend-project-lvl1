#!/usr/bin/env node

import greetings from '../src/greeting.js';
import getUserName from '../src/cli.js';
import questionAnswer from '../src/even.js';

greetings();
questionAnswer(getUserName());
