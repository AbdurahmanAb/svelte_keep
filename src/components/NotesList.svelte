<script lang="ts">
import {notes, Notes} from '../store/store'
let notelist =[] ;
$:notes.subscribe((n)=> notelist = n) 
</script>

<div class="flex justify-center mt-3 gap-3 flex-wrap">
   
    {#each notelist as note, index}
    <div class="bg-slate-300  p-3 rounded-lg ">
        <h1 class="font-bold">Title: {notelist[index].title}</h1>
        <p>{notelist[index].content}</p>
    
    </div>
    {/each}
    
</div>