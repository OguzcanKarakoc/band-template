<template>
  <nav class="relative flex flex-col">
    <div class="right-0 bg-black">
      <MenuIcon
        class="h-12 w-12 p-1 text-white"
        :class="{ 'bg-gray-300 text-black': menu }"
        @click.stop="toggleMenu"
      />
    </div>
    <MenuItem
      v-for="route in routes"
      :key="route.label"
      :item="route"
      v-show="menu"
    />
  </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import { MenuIcon } from "@heroicons/vue/outline";

export default {
  components: {
    MenuItem,
    MenuIcon,
  },
  data: () => ({
    menu: false,
  }),
  props: {
    routes: {
      type: Array,
    },
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>
