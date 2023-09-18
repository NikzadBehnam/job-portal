<template >
  <form action="" class="flex items-center w-full h-12 border border-solid rounded-3xl border-brand-gray-3 ">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-1 h-full text-base font-light flex-nowrap ">

      <!-- Roll Input -->
      <div class="relative flex flex-1 h-full pr-3 iteme-center">
        <label for="role" class="absolute left-0 -top-10 ">Role</label>
        <text-input placeholder="Software engineer" v-model="role" />
      </div>

      <!-- location Input -->
      <span class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2">in</span>
      <div class="relative flex flex-1 h-full pl-3 iteme-center">
        <label for="location" class="absolute left-0 -top-10 ">Where?</label>
        <text-input placeholder="Los Angeles" v-model="location" />
      </div>

    </div>
    <action-button text="search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>


<script>
import TextInput from "@/components/Shared/TextInput.vue";
import ActionButton from "@/components/Shared/ActionButton.vue"
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    UpdateRole(payload) {
      this.role = payload
    },
    UpdateLocation(payload) {
      this.location = payload
    }
  }

}
</script>
