<template>
  <div id="nav" v-if="$store.state.user">
    <header class="bg-white shadow h-20 flex justify-between items-stretch">
      
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full px-3 text-orange-500 font-bold"
      >
        Home
      </router-link>

      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex items-center px-4 h-full transition-colors hover:bg-orange-400 hover:text-white"
        >
          Search Meals
        </router-link>

        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex items-center px-4 h-full transition-colors hover:bg-orange-400 hover:text-white"
        >
          Meals By Letter
        </router-link>

        <router-link
          :to="{ name: 'ingredients' }"
          class="inline-flex items-center px-4 h-full transition-colors hover:bg-orange-400 hover:text-white"
        >
          Meals By Ingredients
        </router-link>

        <router-link
        :to="{ name: 'favoritefood' }"
        class="inline-flex items-center px-4 h-full transition-colors hover:bg-orange-400 hover:text-white"
        >
        Favoritefood
        </router-link>

    

        <button @click="$store.dispatch('logout')">Logout</button>
      </div>
    </header>
  </div>

  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
