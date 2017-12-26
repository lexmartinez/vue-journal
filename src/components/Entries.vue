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
          <td>
            <br/>
            <h3>Day {{props.index}}: {{ props.item.date | moment("MMMM DD,YYYY")}}</h3><br/>
            <p><strong>Project:</strong> {{props.item.project}}<br/><strong>Today's Progress:</strong> {{props.item.progress}}</p>
            <p><strong>Thoughts:</strong> {{props.item.description}}</p>
            <p><strong>Link to work:</strong> <a :href="props.item.repoUrl" target="_blank">{{props.item.repoName}}</a></p>
          </td>
          <td align="center">
            <v-btn :to="`/${props.item._id}`" color="blue-grey darken-2" dark fab small><v-icon>edit</v-icon></v-btn>

            <social-sharing :url="props.item.repoUrl"
                            :title="`Day ${props.index} of #100DaysOfCode Challenge - ${props.item.progress}`"
                            inline-template>

              <network network="twitter">
                <v-btn color="blue-grey darken-2" dark fab small><v-icon>share</v-icon></v-btn>
              </network>

            </social-sharing>
            <v-btn v-clipboard:copy="markdown(props.item, props.index)"
                   v-clipboard:success="onCopy"
                   v-clipboard:error="onError" color="blue-grey darken-2" dark fab small><v-icon>code</v-icon></v-btn>
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
  import Vue from 'vue'

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
            text: 'Entry',
            value: 'entry',
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
      },
      onCopy: (e) => {
        alert('Markdown progress successfully generated and copied to you clipboard')
      },
      onError: (e) => {
        alert('Failed to copy markdown progress')
      },
      markdown: (item, index) => {
        return `### Day ${index}: ${Vue.moment(item.date).format('MMMM DD, YYYY')}

**Project**: ${item.project}.

**Today's Progress**: ${item.progress}

**Thoughts:** ${item.description}

**Link to work:** [${item.repoName}](${item.repoUrl})`
      }
    }
  }
</script>
