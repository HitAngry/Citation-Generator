new Vue({
  el: '#app',
  data: {
    citations: [],
    generatedCitation : {},
    filter: 'actuelle'
  },
  methods: {
    capitalizeFirstLetter(string) {

      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    pointToEnd(string) {
      if(string.charAt(string.length-1) !== '.') {
        string = string + '.'
      } 
      return string
    },
    generate: function() {
      let citation = this.citations[_.random(0, this.citations.length - 1)];
      let text = citation.text.split(' ');
      text.splice(_.random(0, text.length), 0, this.filter);
      text = text.join(' ');
      text = this.capitalizeFirstLetter(text);
      text = this.pointToEnd(text);
      this.generatedCitation = {'text': text, 'author': citation.author, 'origin': citation.origin};
    },
    updateFilter: function(filter) {
      this.filter = filter;
    }
  },
  mounted () {
    $.getJSON('bin/citations.json', json => {
      this.citations = json;
      this.generate();
    })
  }
})