<template>
    <v-container>
      <v-layout row wrap v-for="risk in risks" :key="risk.title" class="mb-4">
        <v-flex xs12 sm8 offset-sm2>
          <v-card>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <h2 class="display-3 blue--text">{{ risk.title }}</h2>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-title v-for="rows in risk.rows" :key="rows.key">
              <h3 class="grey--text display-1">{{ rows.key }} : {{ rows.value }}</h3>
            </v-card-title>
            <v-card-actions>
              <v-btn color="light-blue" :to="'risk/' + risk._id">
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
      risks: []
    }
  },
  created () {
    this.service = new RiskService(this.$resource)
    this.service
      .list()
      .then((risks, err) => {
        if (err) {
          this.msg = err.message
        }
        this.risks = risks
      })
  },
  methods: {
    remove (risk) {
      this.service.del(risk._id)
        .then((error, data) => {
          if (error) {
            this.msg = 'something went wrong'
          }
          let index = this.risk.indexOf(risk)
          this.risk.splice(index, 1)
          this.msg = 'risk removed'
        })
    }
  }
}
</script>
