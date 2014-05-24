function searchController() {
  this.searchIcon = document.getElementById('magnify')
  this.advancedOptions = document.getElementById('advanced-search')
  // this.advancedSearchOptions = document.getElementById('advanced-options')
}

searchController.prototype = {
  init: function() {
    this.setListeners()
  },

  setListeners: function() {
    this.searchIcon.addEventListener('click', this.renderSearchBar)
    this.advancedOptions.addEventListener('click', this.renderAdvancedOptions)
  },

  renderSearchBar: function(event) {
    event.preventDefault();
    var searchWindow = document.getElementById('searchWindow')
    searchWindow.classList.toggle('hidden')
    console.log('in render search bar')
  },

  renderAdvancedOptions:function(event){
    event.preventDefault();
    var advancedSearchOptions = document.getElementById('advanced-options')
    advancedSearchOptions.classList.toggle('hidden')
    console.log('hey we are in advanced')
  }

  // resetSearchWindow: function(){
  //   this.searchIcon.addEventListener('click', this.closeSearchWindow())
  // },

  // closeSearchWindow: function(event) {
  //   this.searchWindow.style.display = 'none'
  //   this.setListeners()
  // }
}