<template>
  <img :src="imageURL" alt="" class="object-contain w-8 h-8 rounded-3xl">
</template>
<script>
import avatarURL from "@/assets/avatar.png"
export default {

  name: "ProfileImage",
  data() {
    return {
      imageURL: avatarURL
    }
  }
}
</script>
