<template>
  <div class="entries">
    <h1>Edit Entry</h1>
    <div class="form">
      <div>
        <textarea rows="15" cols="15" placeholder="CONTENT" v-model="content"></textarea>
      </div>
      <div>
        <button class="app_entry_btn" @click="updateEntry">Update</button>
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
<style type="text/css">
  .form input, .form textarea {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px;
  }
  .form div {
    margin: 20px;
  }
  .app_entry_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;
  }
</style>
