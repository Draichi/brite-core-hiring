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
              >Create Risk</v-btn>
              <v-btn 
                color="deep-purple" 
                id="addFields" 
                @click="addFields()"
              >Add fields</v-btn>
              
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      rows: {
        key: '',
        value: ''
      }
    }
  },
  methods: {
    add () {
      const risk = {
        title: this.title,
        rows: this.rows
      }
      this.$store.dispatch('createRisk', risk)
      this.$router.push('/')
    },
    addFields () {
      this.rows.push({key: '', value: ''})
    }
  },
}
</script>