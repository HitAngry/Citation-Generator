new Vue({
  el: '#app',
  data: {
    citations: [],
    activeCitation : {}
  },
  methods: {
    random: function() {
      let rangeMax = this.citations.length;
      let rand = _.random(0, rangeMax - 1);
      this.activeCitation = this.citations[rand];
    }
  },
  mounted () {
    $.getJSON('bin/citations.json', json => {
      this.citations = json
      this.random();
    })
  }
})