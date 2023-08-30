<script lang="ts">
	import ModeSwitcher from './lib/ModeSwitcher.svelte';
	import Main from './pages/Main.svelte';
	import Popup from './components/Popup.svelte';

import {show} from './store/store';
let show_value;
function toggle(){
    show.update((show)=>!show);
}
show.subscribe(
	(value)=>{show_value= value;}
);
	type Notes ={
		id:number,
		title:string,
		note:string
	};
 let arr:Notes[] = [
{ id:1, title:"First Note", note:"Hello From First Note"}
 ];

 function clickHandler(){
arr.push({ id:2, title:"Sec Note", note:"Hello From Second Note"});
$: arr = [...arr]
console.log("clicked");
}
</script>

{#if show_value}
<Popup/>
{/if}  
<main class="p-4 mx-auto text-center max-w-xl ">
<ModeSwitcher />


<div class="grid grid-cols-3 gap-4 ">	
{#each arr as note, i}

<div class="m-5 bg-orange-300  rounded-lg">
	 <h1>{arr[i].id}</h1>
 <h2> {arr[i].title}</h2>
 <h2>{arr[i].note}</h2>
</div>



{/each}
</div>




<div class="flex flex-col m-5 gap-5">
	<h1>Add Note</h1> 
	<button class="bg-blue-700  p-5  rounded-full font-mono text-3xl" on:click={toggle}>
	+
</button>
</div>
</main>

<style lang="postcss">
	
	
	.custom-style {
		@apply italic;
	}
</style>