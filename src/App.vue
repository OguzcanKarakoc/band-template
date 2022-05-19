<template>
  <header>
    <TheNavigation :routes="mainRoutes" />
  </header>

  <main>
    <router-view />
  </main>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: { TheNavigation },
  data: () => ({
    // [[label, routeName, childeren]]
    mainRoutes: [
      { label: "HOME", routeName: "home", children: undefined },
      { label: "BAND", routeName: "about", children: undefined },
      { label: "TOUR", routeName: "about", children: undefined },
      { label: "CONTACT", routeName: "about", children: undefined },
      {
        label: "MORE",
        children: [
          { label: "MERCHANDISE", routeName: "about", children: undefined },
          { label: "EXTRAS", routeName: "about", children: undefined },
          { label: "MEDIA", routeName: "about", children: undefined },
        ],
      },
    ],
  }),
};
</script>
