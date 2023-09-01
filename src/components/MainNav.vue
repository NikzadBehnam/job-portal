<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex h-full mx-auto space-x-16 border-b border-solid flex-nowrap border-brand-gray-1">
        <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a>
        <nav class="h-full">
          <ul class="flex h-full list-non space-x-9">
            <li class="h-full" v-for="(item, index) in menuItems" :key="index">
              <a href="" class="flex items-center h-full py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Bobo Careers',
      url: "www.google.com",
      menuItems: [
        "Team",
        "Location",
        "Lofe at bob corp",
        "How we hire",
        "Students",
        "Jobs",
      ]
    }
  }
}
</script>
