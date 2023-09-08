<template>
  <header class="flex w-full text-sm">
    <div class="w-full h-16 bg-white ">
      <div class="flex h-full px-5 mx-auto border-b border-solid flex-nowrap border-brand-gray-1">
        <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a>
        <nav class="h-full ml-28">
          <ul class="flex h-full space-x-11 list-non">
            <!-- ml-6 first:ml-0 -->
            <li class="h-full" v-for="(item, index) in menuItems" :key="index">
              <a href="" class="flex items-center h-full py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" />
          <action-button text="Sign In" v-else @click="() => (isLoggedIn = !isLoggedIn)" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import TheSubnav from '@/components/TheSubnav.vue'
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Bobo Careers',
      url: 'www.google.com',
      menuItems: ['Team', 'Location', 'Lofe at bob corp', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },

  // methods: {
  //   toggleLogin() {
  //     this.isLoggedIn = !this.isLoggedIn
  //   }
  // }
}
</script>
