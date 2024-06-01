// src/lib/context.ts
import { writable } from 'svelte/store';

export const emailContext = writable<string>('');
