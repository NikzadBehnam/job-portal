<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex h-full px-8 mx-auto border-b border-solid flex-nowrap border-brand-gray-1">
        <a class="flex items-center h-full text-2xl font-thin" href="/">

          <!-- Logo -->
          <div class="pr-1 m-0 uppercase border border-brand-green-1">
            <span class="font-normal text-white bg-brand-green-1">{{
              companyName.slice(0, 4)
            }}</span>{{ companyName.slice(4) }}
          </div>
          <h2 class="flex items-center h-full ml-8">Developed by {{ author.firstName }} {{ author.lastName }}</h2>
        </a>
      </div>
    </div>

  </header>
</template>
<script>
export default {
  name: 'MainNav',
  data() {
    return {
      companyName: 'dadaproject',
      author: {
        firstName: "Nikzad",
        lastName: "Behnam"
      }
    }
  }
}
</script>
