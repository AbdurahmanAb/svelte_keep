import { Writable, writable } from "svelte/store";

export const show:Writable<boolean> = writable(false);