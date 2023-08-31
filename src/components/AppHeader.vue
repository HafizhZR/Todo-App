<template>
  <div>
    <nav class="bg-[#333] px-4 fixed top-0 left-0 right-0 z-1000 flex justify-evenly">
      <router-link class="text-[#959595] no-underline px-2 py-4 font-bold hover:text-[#fff] active:text-[#fff]" to="/">Home</router-link>
      <router-link class="text-[#959595] no-underline px-2 py-4 font-bold hover:text-[#fff] active:text-[#fff]" to="/todo">Todo</router-link>
      <router-link class="text-[#959595] no-underline px-2 py-4 font-bold hover:text-[#fff] active:text-[#fff]" to="/about">About</router-link>
    </nav>
    <Router-view></Router-view>
  </div>
</template>

<style>
a.router-link-exact-active {
  color: #fff;
  font-weight: bold;
}
</style>