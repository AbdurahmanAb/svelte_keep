import { Writable, writable } from "svelte/store";

export const clicked:Writable<boolean>= writable(true);