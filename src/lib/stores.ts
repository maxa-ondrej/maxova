import {writable} from "svelte/store";
import type {Writable} from "svelte/store";

export const darkMode: Writable<boolean> = writable(true);