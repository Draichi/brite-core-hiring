<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <div class="">
              <h2 class="headline primary--text">{{ job.title }}</h2><br>
              <h4>{{ job.description }}</h4>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="'/'" large color="primary">Back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Risk from '../domain/Risk'
import RiskService from '../domain/RiskService'

export default {
  name: 'Single',
  data () {
    return {
      job: new Risk(),
      id: this.$route.params.id
    }
  },
  created () {
    this.service = new RiskService(this.$resource)
    if (this.id) {
      this.service
        .find(this.id)
        .then((job, err) => {
          if (err) {
            console.log(err)
          }
          this.job = job
        })
    }
  }
}
</script>
