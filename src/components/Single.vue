<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <div class="">
              <h2 class="display-4 blue--text">{{ risk.title }}</h2><br>
              <h3 class="white--text display-2" v-for="rows in risk.rows" :key="rows.key">{{ rows.key }} : {{ rows.value }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="'/'" color="light-blue">
              <v-icon left>arrow_back</v-icon>
              Back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Single',
  props: ['id'],
  computed: {
    risk () {
      return this.$store.getters.loadedRisk(this.id)
    }
  }
}
</script>
