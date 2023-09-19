import { Writable, writable } from "svelte/store";

export const clicked:Writable<boolean>= writable(true);

export interface Notes{
    title?:string,
    id:number,
    content?:string,
    created:Date
}

export const notes:Writable<Notes[]> = writable([]);



