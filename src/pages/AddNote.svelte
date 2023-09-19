<!-- @format -->
<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from "svelte";
  import {notes,Notes} from '../store/store'
    import NotesList from "../components/NotesList.svelte";

  let first: HTMLElement;
  let second: HTMLElement;

  let text: HTMLTextAreaElement;
  let title: HTMLInputElement;
  let notelist=[];
  let noteslength:number;


  onMount(() => {
    second.style.visibility = "hidden";
  });

  afterUpdate(() => {
    // Remove the event listener before adding a new one
    document.removeEventListener("click", handleOutSideClick);
    document.addEventListener("click", handleOutSideClick);
  });

  onDestroy(() => {
    document.removeEventListener("click", handleOutSideClick);
  });

  const handleOutSideClick = (e) => {
    if (second && !second.contains(e.target) && !first.contains(e.target)) {
      second.style.visibility = "hidden";
      first.style.visibility = "visible";
    }
  };
  const onChange = () => {
    if(text.value != '' || title.value != ''){
      const newNote:Notes = {
      id:4,
  title: title.value,
  content: text.value,
  created:new Date(),
};
notes.update((prevNotes)=>[...prevNotes, newNote] );
   


$:notes.subscribe((n)=> notelist = n)
console.log(notelist); 
noteslength = notelist.length   
//console.log(notes)
    title.value = '';
    text.value =''

    }

  };


  const onClick = () => {
    first.style.visibility = "hidden";
    second.style.visibility = "visible";
    text.focus();
    document.addEventListener("click", handleOutSideClick);
  };
</script>

<div class="w-full h-full flex flex-col">
  <div class=" flex justify-center items-start mb-10">
    <div class="relative w-1/2 h-40" >
      <div class="relative" on:click={onClick} bind:this={first}>
        <input
          type="text"
          class=" mt-9 py-3 px-5 w-full rounded-lg outline-none placeholder:font-bold placeholder:text-gray-500 shadow-box"
          placeholder="Take a Note.."
        />
        <div class="flex text-3xl gap-2 text-grey absolute right-3 bottom-2">
          <iconify-icon icon="mdi:check-box-outline" />
          <iconify-icon icon="mdi:image-outline" />
        </div>
      </div>
      <div
        class=" w-full absolute top-0 mt-9 rounded-lg shadow-box overflow-hidden"
      bind:this={second}
      >
        <div class="relative" >
          <input
            type="text"
            bind:this={title}
            class="  py-3 px-3 w-full outline-none placeholder:font-bold placeholder:text-gray-500"
            placeholder="Title"
          />
          <div class="flex text-3xl absolute right-3 bottom-2">
            <iconify-icon icon="mdi:pin-outline" />
          </div>
        </div>

        <textarea
          bind:this={text}
          class="resize-none w-full py-2 px-3 outline-none placeholder:font-semibold placeholder:text-gray-600 text-sm"
          placeholder="Take a note . . ."
        />
        <div class="flex p-2  items-center justify-between">
         
<div class="flex gap-5 text-xl">
  <iconify-icon icon="bx:bell-plus" class="" />
  <iconify-icon icon="fluent-mdl2:add-friend" class="" />
  <iconify-icon icon="mdi:paint-outline" class="" />
</div>
       

<button class="flex items-center gap-1 bg-blue-700 p-2 rounded-lg text-white font-bold" on:click={onChange}>
  <iconify-icon icon="bi:save" class="" />
  save 
</button>



         
        </div>
      </div>
    </div>
  </div>
  {#if noteslength > 0}
   
<NotesList/>

    {:else}
     <div class="text-center">
        <iconify-icon icon="mdi:bulb-outline" class="text-9xl" />
        <h1>Notes Will Be here</h1>
      </div>
   {/if}
  
</div>
