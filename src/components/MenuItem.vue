<template>
  <div
    class="bg-black p-3 text-white"
    :class="{
      'hover:bg-gray-300': item.routeName,
      'hover:text-black': item.routeName,
    }"
    @click.stop="toggleDropdown"
  >
    {{ item.label }}

    <template v-if="hasChildren">
      <ChevronDownIcon
        v-if="!dropdown"
        class="inline-block h-6 w-6 text-white"
      />
      <ChevronUpIcon v-if="dropdown" class="inline-block h-6 w-6 text-white" />
      <div v-show="dropdown">
        <MenuItem
          v-for="child in item.children"
          :key="child.label"
          :item="child"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/outline";

export default {
  name: "MenuItem",
  components: { ChevronDownIcon, ChevronUpIcon },
  data: () => ({
    dropdown: false,
  }),
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasChildren() {
      const { children } = this.item;
      return children && children.length > 0;
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
  },
};
</script>
