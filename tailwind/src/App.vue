<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/containerex1">Container</RouterLink>
    <RouterLink to="/boxsizing">Box Sizing</RouterLink>
    <RouterLink to="/display">Display</RouterLink>
    <RouterLink to="/overflow">Overflow</RouterLink>
    <RouterLink to="/position">Position</RouterLink>
    <RouterLink to="/visibility">Visibility</RouterLink>
    <RouterLink to="/zindex">Z-Index</RouterLink>
  </nav>

  <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
  </div>

  <RouterView />
</template>
<style scoped>
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>