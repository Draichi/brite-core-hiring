<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h2>New Risk</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-form @submit.prevent="add()">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                required
                v-model="title"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn color="deep-purple" id="addFields" @click="addFields()">Add fields</v-btn>
              <v-flex v-for="(row, index) of rows" :key="row.index">
                <v-text-field label="key" name="row.key" v-model="row.key"></v-text-field>
                <v-text-field label="value" name="row.value" v-model="row.value"></v-text-field>
                <v-divider></v-divider>
              </v-flex>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn 
                color="blue" 
                type="submit"
                >Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import RiskService from '../domain/RiskService'

export default {
  data () {
    return {
      title: this.title,
      id: this.$route.params.id,
      rows: []
     
    }
  },
  methods: {
    add () {
      const risk = {
        title: this.title,
        rows: this.rows
      }
      this.service
        .addNew(risk)
        .then((sucess, err) => {
          if (err) {
            console.log(err)
          }
          this.rows = '',
          this.title = ''
        })
      
      console.log(risk)
    },
    addFields () {
      this.rows.push({key: '', value: ''})
    }
  },
  created () {
    this.service = new RiskService(this.$resource)
  }
}
</script>