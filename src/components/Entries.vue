<template>
  <div class="entries">
    <h1>Entries</h1>
    <div v-if="entries.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewEntry' }" class="add_entry_link">Add Entry</router-link>
      </div>
      <table>
        <tr>
          <td>Date</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="entry in entries">
          <td>{{ entry.date }}</td>
          <td><vue-markdown>{{ entry.content }}</vue-markdown></td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditEntry', params: { id: entry._id } }">Edit</router-link>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no entries.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewEntry' }" class="add_entry_link">Add Entry</router-link>
    </div>
  </div>
</template>

<script>
  import EntriesService from '@/services/EntriesService'
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'entries',
    components: {
      VueMarkdown
    },
    data () {
      return {
        entries: []
      }
    },
    mounted () {
      this.getEntries()
    },
    methods: {
      async getEntries () {
        const response = await EntriesService.fetchEntries()
        this.entries = response.data
      }
    }
  }
</script>
<style type="text/css">
  .table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  table th, table tr {
    text-align: left;
  }
  table thead {
    background: #f2f2f2;
  }
  table tr td {
    padding: 10px;
  }
  table tr:nth-child(odd) {
    background: #f2f2f2;
  }
  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }
  a {
    color: #4d7ef7;
    text-decoration: none;
  }
  a.add_entry_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
</style>
