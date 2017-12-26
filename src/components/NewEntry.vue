<template>
  <div class="entries" style="margin-top: 70px">
    <h1>Add Entry</h1><br/>
    <div class="form">
      <div>
        <v-text-field
          name="input-7-1"
          label="Content"
          multi-line
          rows="12"
          v-model="content"></v-text-field>
      </div>
      <div>
        <v-btn color="blue-grey darken-2" dark @click="addEntry" style="width: 500px">Add</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import EntriesService from '@/services/EntriesService'
  export default {
    name: 'NewEntry',
    data () {
      return {
        content: ''
      }
    },
    methods: {
      async addEntry () {
        await EntriesService.addEntry({
          content: this.content
        })
        this.$router.push({ name: 'Entries' })
      }
    }
  }
</script>
