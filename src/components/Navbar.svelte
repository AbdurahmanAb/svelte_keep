<!-- @format -->
<script lang="ts">
  import "iconify-icon";
  import { clicked } from "../store/store";
  import { onMount } from "svelte";
  let popup: HTMLElement;
  let a: HTMLElement;
  let hidden: boolean;
  const ClickOutSide = (e) => {
    if (
      popup &&
      !hidden &&
      !popup.contains(e.target) &&
      !a.contains(e.target)
    ) {
      hidden = true;
    }
  };
  onMount(() => {
    hidden = true;
    document.addEventListener("click", ClickOutSide);
  });
  function toggle() {
    clicked.update((c) => !c);
  }

  const handleClick = () => {
    hidden = !hidden;
  };
</script>

<nav class="flex h-16 items-center justify-between px-3 fixed w-screen z-10">
  <div class="flex gap-2">
    <iconify-icon
      icon="mdi:menu"
      class="text-2xl p-3 rounded-full hover:bg-slate-100"
      on:click={toggle}
    />

    <div class="logo flex items-center gap-3">
      <img src="assets/icon.png" alt="" class="h-9" />
      <h2 class="text-xl font-semibold text-grey">Keep</h2>
    </div>
  </div>
  <div class="search relative" style="width: 600px; ">
    <iconify-icon
      icon="mdi:search"
      class="absolute p-3 text-2xl rounded-md top-0 left-1 text-grey bg-transparent"
    />
    <input
      type="text"
      name=""
      id=""
      class="bg-gray-100 outline-none w-full py-3 pl-14 rounded-md focus:bg-white focus:shadow-box"
    />
  </div>
  <!-- <div class="flex items-center justify-between"> -->

  <iconify-icon class="text-2xl" icon="mdi:refresh" />

  <iconify-icon class="text-2xl" icon="line-md:list-3" />
  <iconify-icon class="text-2xl" icon="mdi:settings" />

  <div class="flex items-center gap-3">
    <iconify-icon class="text-2xl relative" icon="mdi:dots-grid" />

    {#if !hidden}
      <div
        class="absolute top-16 right-3 bg-slate-100 h-96 w-rect rounded-3xl flex flex-col items-center justify-between p-4"
        bind:this={popup}
      >
        <div class="flex items-center justify-center">
          <h1 class="text-center font-bold">abdurahmanabdela47@gmail.com</h1>

          <iconify-icon
            class="absolute right-4 text-2xl cursor-pointer hover:bg-slate-200 rounded-full p-1"
            icon="mdi:close"
            onclick={handleClick}
          />
        </div>
        <div class="relative">
          <p
            class=" text-white p-5 w-20 font-bold text-center text-3xl rounded-circle bg-purple-950"
          >
            A
          </p>
          <iconify-icon
            icon="mdi:pencil"
            class="absolute right-0 bottom-0 p-2 bg-white rounded-circle"
          />
        </div>
        <p class="text-3xl">Hi, Abdurahman!</p>
        <button
          class="border border-gray-300 rounded-3xl text-blue-500 font-bold hover:bg-slate-200 p-3"
          >Manage Your Google Account</button
        >
        <button
          class="border border-gray-300 rounded-3xl font-bold hover:bg-slate-200 px-4 py-3 w-full text-start"
          >Recommeded Actions</button
        >
        <div class="flex gap-5 w-full">
          <button
            class="border w-1/2 hover:bg-slate-50 border-gray-300 rounded-s-3xl px-4 py-3"
            >Add Acount</button
          >
          <button
            class="border w-1/2 hover:bg-slate-50 border-gray-300 rounded-r-3xl px-4 py-3"
            >Sign Out</button
          >
        </div>
      </div>
    {/if}
    <p
      class="text-white p-2 w-9 font-bold text-center rounded-circle bg-purple-950"
      on:click={handleClick}
      bind:this={a}
    >
      A
    </p>
  </div>

  <!-- </div> -->
</nav>
