<!-- @format -->
<script lang="ts">
  import { clicked } from "../store/store";
  let value: boolean;

  let num: number;
  let display: string;
  $: {
    clicked.subscribe((v) => (value = v));
    value ? (num = 264) : (num = 40);
    value ? (display = "block") : (display = "none");
  }
  console.log("from side", value);
</script>
<div class="  h-full flex flex-col pt-5 gap-1" style="width: {num}px;">
  <div
    class="flex gap-6 items-center font-semibold text-md hover:bg-orange-100 p-3 pl-7 rounded-r-3xl w-full"
  >
    <iconify-icon icon="entypo:light-bulb" class="text-2xl" />
    <p style="display:{display}">Notes</p>
  </div>
  <div
    class="flex gap-6 items-center font-semibold text-md hover:bg-orange-100 p-3 pl-7 rounded-r-3xl w-full"
  >
    <iconify-icon icon="mdi:bell-outline" class="text-2xl" />
    <p style="display:{display}">Reminder</p>
  </div>
  <div
    class="flex gap-6 items-center font-semibold text-md hover:bg-orange-100 p-3 pl-7 rounded-r-3xl w-full"
  >
    <iconify-icon icon="octicon:pencil-24" class="text-2xl" />
    <p style="display:{display}">Edit Labels</p>
  </div>
  <div
    class="flex gap-6 items-center font-semibold text-md hover:bg-orange-100 p-3 pl-7 rounded-r-3xl w-full"
  >
    <iconify-icon icon="material-symbols:archive-outline" class="text-2xl" />
    <p style="display:{display}">Archive</p>
  </div>

  <div
    class="flex gap-6 items-center font-semibold text-md hover:bg-orange-100 p-3 pl-7 rounded-r-3xl w-full"
  >
    <iconify-icon icon="tabler:trash" class="text-2xl" />
    <p style="display:{display}">Trash</p>
  </div>
</div>
