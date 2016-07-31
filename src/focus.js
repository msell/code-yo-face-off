#!/usr/bin/env node

import playit from './playit';

import {green} from 'colors';

console.log('Time to focus... ☕️ '.green)
playit('../tracks/morning-murmur.mp3', true);