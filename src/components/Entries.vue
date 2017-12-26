<template>
  <div class="entries">
    <div v-if="entries.length > 0" class="table-wrap">
      <div style="float:right">
        <v-btn to="/new" color="blue-grey darken-2" dark>Add Entry</v-btn>
        <br/><br/>
      </div>
      <v-data-table
        v-bind:headers="headers"
        :items="entries"
        hide-actions
        class="elevation-1">

        <template slot="items" slot-scope="props">
          <td>{{ props.item.date | moment("DD/MM/YYYY")}}</td>
          <td><br/><vue-markdown :anchorAttributes="{target: '_blank'}">{{ props.item.content }}</vue-markdown></td>
          <td align="center">
            <v-btn :to="`/${props.item._id}`" color="blue-grey darken-2" dark>Edit</v-btn>
          </td>
        </template>

      </v-data-table>
    </div>
    <div v-else style="width: 500px; margin-top:200px; text-align: center">
      There are no entries.. Lets add one now <br /><br />
      <v-btn to="/new" color="blue-grey darken-2" dark>Add Entry</v-btn>
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
        entries: [],
        headers: [
          {
            text: 'Date',
            align: 'left',
            sortable: true,
            value: 'date'
          },
          {
            text: 'Content',
            value: 'content',
            sorteable: false,
            align: 'center'
          },
          {
            text: '',
            value: '_.id',
            sorteable: false
          }
        ]
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
