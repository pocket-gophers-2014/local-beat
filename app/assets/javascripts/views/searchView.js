function SearchView(utility){
  this.utilities = new Utilities()
  this.searchWindowSelector     = '#search-window'
  this.advOptionsSelector       = '.advanced-options'
  this.searchIconSelector       = '#magnify'
  this.advOptionsIconSelector   = '#more-options-icon'
  this.locationSearchTextField  = '#user_input_location_name'
  this.artistSearchTextField    = '#artist_name'
  this.searchStatusDiv          = '.search-status'
  this.searchStatusHeader       = '.search-status h4'
  this.currentLocation          = ""
  this.spinner                  = new Spinner()
}


SearchView.prototype = {
  renderSearchBar: function(event) {
    $('#user_input_location_name').val(this.currentLocation)
    $('#artist_name').val('')

    this.getSearchStatusHeader().innerText = ""

    if ($(this.searchWindowSelector).is(':hidden')){
      $('.pop-up').hide()
      $(this.searchWindowSelector).slideDown("slow")
      $(this.advOptionsIconSelector).show()
    } else {
      $(this.searchWindowSelector).hide(500)
      $(this.advOptionsIconSelector).hide(500)
    }
  },

  renderAdvancedOptions:function(event){
    if ($(this.advOptionsSelector).is(':hidden')){
      $(this.advOptionsSelector).slideDown("slow");
      $(".loc-submit").removeClass("hide-submit")
    } else {
      $(this.advOptionsSelector).hide()
      $(".loc-submit").addClass("hide-submit")
    }
  },

  renderSearchErrorMessages: function(errors){
    this.getSearchStatusDiv().classList.remove("hidden")
    this.getSearchStatusHeader().innerText = errors
  },

  hideSearchBox: function(){
    $(this.searchWindowSelector).hide(500)
    $('.pop-up').hide()
  },


  // AUTOCOMPLETE FOR ARTISTS

  limitArtistSearchQueryCharacters: function() {
    var textInput = $(this.artistSearchTextField).val()
    if (textInput.length >= 3) {
        this.searchSuggestArtist(textInput)
    }
  },

  searchSuggestArtist: function(textInput) {
    $.getJSON("http://api.songkick.com/api/3.0/search/artists.json?query=" + textInput + "&apikey=pH29QOMdmJML48IO&jsoncallback=?").done(this.renderArtistSearchSuggestionBox.bind(this))
  },

  renderArtistSearchSuggestionBox: function(data) {
    var artists = data.resultsPage.results.artist
    var artistArray = []

    for (var i = 0; i < 5; i ++){
      if(artists !== undefined && artists[i] !== undefined){
          artistArray.push(artists[i].displayName)
      }
    }
    this.executeFunctionForArtist(artistArray)
  },

  executeFunctionForArtist: function(array){
    // window.setInterval(console.log("I'm here"), 1000)
    $(this.artistSearchTextField).autocomplete({ source: this.utilities.uniq(array), delay: 1500})
    this.spinner.stop()
  },


  // AUTOCOMPLETE FOR LOCATIONS

  limitLocationSearchQueryCharacters: function() {
    var textInput = $(this.locationSearchTextField).val()
    if (textInput.length >= 1) {
        this.searchSuggestLocation(textInput)
    }
  },

  searchSuggestLocation: function(textInput) {
    $.getJSON("http://api.songkick.com/api/3.0/search/locations.json?query=" + textInput +"&apikey=pH29QOMdmJML48IO&jsoncallback=?").done(this.renderLocationSearchSuggestionBox.bind(this))
  },

  renderLocationSearchSuggestionBox: function(data) {
    var locations = data.resultsPage.results.location
    var locationArray = []

    for (var i = 0; i < 5; i ++){
      if(locations && locations[i]!== undefined){
      locationArray.push(locations[i].city.displayName, locations[i].metroArea.displayName)
      }
    }

    this.executeFunctionForLocation(locationArray)
  },

  executeFunctionForLocation: function(array){
    $(this.locationSearchTextField).autocomplete({ source: this.utilities.uniq(array), delay: 1500})
    this.spinner.stop()
  },


  // GET DOM ELEMENTS

  getSearchIcon: function(){
    return document.querySelector(this.searchIconSelector)
  },

  getAdvOptionsIcon: function(){
    return document.querySelector(this.advOptionsIconSelector)
  },

  getArtistSearchTextField: function() {
    return document.querySelector(this.artistSearchTextField)
  },

  getLocationSearchTextField: function(){
    return document.querySelector(this.locationSearchTextField)
  },

  getSearchStatusHeader: function(){
    return document.querySelector(this.searchStatusHeader)
  },

  getSearchStatusDiv: function(){
    return document.querySelector(this.searchStatusDiv)
  }

}

