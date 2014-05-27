function SearchView(){
  this.searchWindowSelector = '#search-window'
  this.advOptionsSelector = '.advanced-options'
  this.searchIconSelector = '#magnify'
  this.advOptionsIconSelector = '#more-options-icon'
  this.locationSearchTextField = '#user_input_location_name'
}

SearchView.prototype = {
  renderSearchBar: function(event) {
    // $(".loc-submit").addClass("hide-submit")
    // $('.pop-up').hide()
    // $(this.advOptionsIconSelector).show()
    $('#user_input_location_name').val('')
    $('#artist_name').val('')
   if ($(this.searchWindowSelector).is(':hidden')){
    $('.pop-up').hide()
    $(this.searchWindowSelector).slideDown("slow")
    $(this.advOptionsIconSelector).show()
   }
   else {
    $(this.searchWindowSelector).hide(500)
    $(this.advOptionsIconSelector).hide(500)
   }

  },

  renderAdvancedOptions:function(event){
    $(".loc-submit").removeClass("hide-submit")
    if ($(this.advOptionsSelector).is(':hidden')){
      $(this.advOptionsSelector).slideDown("slow");
    } else {
      $(this.advOptionsSelector).hide()
    }
  },

  getSearchIcon: function(){
    return document.querySelector(this.searchIconSelector)
  },

  getAdvOptionsIcon: function(){
    return document.querySelector(this.advOptionsIconSelector)
  },

  getLocationSearchTextField: function() {
    return document.querySelector(this.locationSearchTextField)
  },

  searchSuggest: function() {
    console.log('hello')
  }
}