<template>
  <div class="entries" style="margin-top: 70px">
    <h1>Edit Entry</h1><br/>
    <div class="form">
      <div>
        <v-text-field
          name="input-1"
          label="Progress"
          v-model="progress"></v-text-field>
        <v-text-field
          name="input-2"
          label="Project"
          v-model="project"></v-text-field>
        <v-text-field
          name="input-3"
          label="Description"
          multi-line
          rows="5"
          v-model="description"></v-text-field>
        <v-layout row>
          <v-flex xs4><v-text-field
            name="input-4"
            label="Repository Name"
            v-model="repoName"></v-text-field></v-flex>
          <v-flex xs8><v-text-field
            name="input-5"
            label="Repository URL"
            v-model="repoUrl"></v-text-field></v-flex>
        </v-layout>
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
        description: '',
        progress: '',
        project: '',
        repoName: '',
        repoUrl: ''
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
        this.progress = response.data.progress
        this.description = response.data.description
        this.project = response.data.project
        this.repoName = response.data.repoName
        this.repoUrl = response.data.repoUrl
      },
      async updateEntry () {
        await EntriesService.updateEntry({
          id: this.$route.params.id,
          progress: this.progress,
          description: this.description,
          project: this.project,
          repoName: this.repoName,
          repoUrl: this.repoUrl
        })
        this.$router.push({ name: 'Entries' })
      }
    }
  }
</script>
