import Vue from 'vue'

const apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

document.addEventListener('turbolinks:load', () => {
  const el = document.getElementById('vue-app')
  if (el) {
    new Vue({
      el: el,

      data: {
        branches: ['master', 'dev'],
        currentBranch: 'master',
        commits: null
      },

      created() {
        this.fetchData()
      },

      watch: {
        currentBranch: 'fetchData'
      },

      filters: {
        truncate(v) {
          const newline = v.indexOf('\n')
          return newline > 0 ? v.slice(0, newline) : v
        },
        formatDate(v) {
          return v.replace(/T|Z/g, ' ')
        }
      },

      methods: {
        fetchData() {
          const xhr = new XMLHttpRequest()
          const self = this
          xhr.open('GET', apiURL + self.currentBranch)
          xhr.onload = () => {
            self.commits = JSON.parse(xhr.responseText)
            console.log(self.commits[0].html_url)
          }
          xhr.send()
        }
      }
    })
  }
})