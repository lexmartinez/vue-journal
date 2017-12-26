<template>
  <div class="entries">
    <h1>Add Entry</h1>
    <div class="form">
      <div>
        <textarea rows="15" cols="15" placeholder="content" v-model="content"></textarea>
      </div>
      <div>
        <button class="app_entry_btn" @click="addEntry">Add</button>
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
