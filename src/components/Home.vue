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
            <v-card-title v-for="row in risk.rows" :key="row.key">
              <h3 class="grey--text display-1">{{ row.key }} : {{ row.value }}</h3>
            </v-card-title>
            <v-card-actions>
              <v-btn color="light-blue" :to="'risk/' + risk.id">
                <v-icon left>arrow_forward</v-icon>
                Show</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    risks () {
      return this.$store.getters.loadedRisks
    }
  }
}
</script>
