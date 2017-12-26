<template>
  <div class="entries" style="margin-top: 70px">
    <h1>Edit Entry</h1><br/>
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
        <v-btn color="blue-grey darken-2" dark @click="updateEntry" style="width: 500px">Update</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import EntriesService from '@/services/EntriesService'
  export default {
    name: 'EditEntry',
    data () {
      return {
        content: ''
      }
    },
    mounted () {
      this.getEntry()
    },
    methods: {
      async getEntry () {
        const response = await EntriesService.getEntry({
          id: this.$route.params.id
        })
        this.content = response.data.content
      },
      async updateEntry () {
        await EntriesService.updateEntry({
          id: this.$route.params.id,
          content: this.content
        })
        this.$router.push({ name: 'Entries' })
      }
    }
  }
</script>
