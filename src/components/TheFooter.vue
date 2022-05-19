<template>
  <footer
    class="flex flex-col bg-gray-100 py-16 px-4 text-center text-gray-600"
  >
    <!-- Socials -->
    <div class="flex gap-2 self-center fill-gray-600">
      <IconFacebook class="w-6 hover:fill-gray-400" />
      <IconInstagram class="w-6 hover:fill-gray-400" />
      <IconPinterest class="w-6 hover:fill-gray-400" />
      <IconSnapchat class="w-6 hover:fill-gray-400" />
      <IconTwitter class="w-6 hover:fill-gray-400" />
      <IconLinkedin class="w-6 hover:fill-gray-400" />
    </div>

    <!-- Footer text -->
    <div class="my-4">
      {{ msg }}
    </div>
  </footer>
</template>

<script>
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconSnapchat from "@/components/icons/IconSnapchat.vue";
import IconPinterest from "@/components/icons/IconPinterest.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";

export default {
  components: {
    IconFacebook,
    IconInstagram,
    IconPinterest,
    IconSnapchat,
    IconTwitter,
    IconLinkedin,
  },
  props: {
    msg: {
      type: String,
      default: "Powered by w3.css",
    },
  },
};
</script>
