<script lang="ts">

import { show } from "../store/store";
function toggle(){
    show.update((show)=>!show);
}
</script>
<main>
    <div class="body">
<div class="rounded-lg p-4  bg-white popup relative">
     <h1 class="bg-red-700 p-2 text-white font-bold rounded-full absolute top-1 right-2 " on:click={toggle}>X</h1>
<div class="flex flex-col gap-5 items-center mt-5 ">

        <h1>Write Your Notes</h1>
    



	<input type="text" placeholder="Title" id="title" class="p-4 rounded-lg bg-gray-100 text-black outline-none" >

<textarea placeholder="First Time ....." name="notes" id="notearea" cols="30" rows="10" class="p-5 rounded-lg bg-gray-100 text-black outline-none" draggable="false"></textarea>
<button class="bg-blue-400 rounded-lg p-4 text-white ">Sumbit</button>
</div>
</div>
</div>
</main>

<style scoped>

    main{
        height: 100vh;
        width: 100%;
        position: fixed;
        background-color: rgba(0,0,0, .5);
    }
    .body{
        height: 100%;
        
        display: flex;
       align-items: center;
        justify-content: center;
  
    }
    .popup{
    

       
    }
    #notearea{
resize: none;
    }
</style>