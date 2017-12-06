<template>
    <v-container>
      <v-layout row wrap v-for="job in jobs" :key="job.title" class="mb-4">
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <h2 class="headline blue--text">{{ job.title }}</h2>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-title>
              <h3 class="grey--text">{{ job.rows }}: {{ job.rows }}</h3>
            </v-card-title>
            <v-card-actions>
              <v-btn color="light-blue" :to="'risk/' + job._id">
                <v-icon left>arrow_forward</v-icon>
                Show</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import RiskService from '../domain/RiskService'

export default {
  name: 'Home',
  data () {
    return {
      jobs: []
    }
  },
  created () {
    this.service = new RiskService(this.$resource)
    this.service
      .list()
      .then((jobs, err) => {
        if (err) {
          this.msg = err.message
        }
        this.jobs = jobs
      })
  },
  methods: {
    remove (job) {
      this.service.del(job._id)
        .then((error, data) => {
          if (error) {
            this.msg = 'something went wrong'
          }
          let index = this.jobs.indexOf(job)
          this.jobs.splice(index, 1)
          this.msg = 'job removed'
        })
    }
  }
}
</script>
