<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-tile v-for="example in examples" :key="example.id" :class="example.colour">
          <v-list-tile-content>{{example.id}}</v-list-tile-content>
          <v-list-tile-content>{{example.name}}</v-list-tile-content>
          <v-list-tile-content>{{example.colour}}</v-list-tile-content>
          <v-list-tile-content>{{example.created_at | dateformatd}}</v-list-tile-content>
          <v-list-tile-content>{{example.upated_at | dateformatd}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>

export default {

  middleware: ['auth'],
  data () {
    return {
      examples: []
    }
  },
  filters: {
    // Truncate text in template.. https://stackoverflow.com/questions/35070271/vue-js-components-how-to-truncate-the-text-in-the-slot-element-in-a-component
    truncate: function(text, length, suffix) {
      text = text || "."; // ref. https://github.com/imcvampire/vue-truncate-filter/issues/10 - fails on null
      return text.substring(0, length) + suffix;
    },
    // format date
    dateformatd: function(input) {
      if (input) {
        return (concat('D ',String(input)));
      }
    }
  },
  methods: {
    async updateExamples() {
      this.examples = await this.$axios.$get('/examples')
    }
  },

  mounted () {
    this.updateExamples()
  }
}
</script>
