SessionView = function() {
  this.loginToggleButtonSelector = '#login'
  this.signUpToggleButtonSelector = '#sign-up'
  this.loginFormSelector = '#login-form form'
  this.signUpFormSelector = '#sign-up-form form'
  this.signUpFormDivSelector = '#sign-up-form'
  this.loginFormDivSelector = '#login-form'
  this.currentUserDataSelector = '#current-user-data'
  this.logInMenuSelector = '#login-menu-button'
  this.userLogWindowSelector = '#user-log-box'
  this.sessionMenuSelector = '#session-menu'
  this.logOutButtonSelector = '#logout-button'
  this.signUpErrorDivSelector = '.sign-up-errors h4'
  this.loginErrorDivSelector = '.login-errors h4'
  this.settingsButtonSelector = '.settings-button'
  this.updateLocationDivSelector = '#update-user-preferences'
}

SessionView.prototype = {
  getLoginToggleButton: function() {
    return document.querySelector(this.loginToggleButtonSelector)
  },

  getSignUpToggleButton: function() {
    return document.querySelector(this.signUpToggleButtonSelector)
  },

  clearForms: function(){
    $('.pop-up').hide()
  },

  toggleLoginForm: function() {
    // var loginForm = document.querySelector(this.loginFormDivSelector)
    // loginForm.classList.toggle('hidden')

    if ($(this.loginFormDivSelector).is(':hidden')){
      $(this.loginFormDivSelector).show("slow");
    } else {
      $(this.loginFormDivSelector).hide(800)
    }

  },

  toggleSignUpForm: function() {
    // var signUpForm = document.querySelector(this.signUpFormDivSelector)
    // signUpForm.classList.toggle('hidden')
      if ($(this.signUpFormDivSelector).is(':hidden')){
        $(this.signUpFormDivSelector).show("slow");
      } else {
        $(this.signUpFormDivSelector).hide(800)
      }
  },

  toggleSessionBox: function() {
    // var userWindow = document.querySelector(this.userLogWindowSelector)
    if ($(this.userLogWindowSelector).is(':hidden')){
      $('.pop-up').hide()
      $(this.userLogWindowSelector).slideDown("fast")
    } else {
      $(this.userLogWindowSelector).hide()
    }
    // userWindow.classList.toggle('hidden')
  },

  toggleSettingsButton: function(){
    $('#location').val('')
    this.getSettingsButton().classList.toggle("hidden")
  },

  toggleUpdateLocationDiv: function(){
    var updateForm = this.getUpdateLocationDiv()
    var currentLocation = userData.songkickLocationName
    $('span.current-location').text(currentLocation)
    if ($(updateForm).is(':hidden')){
      $('.pop-up').hide()
      $(updateForm).slideDown("fast")
    } else {
      $(updateForm).hide()
    }
  },

  renderLoginErrorMessages: function(errors){
    document.querySelector(this.loginErrorDivSelector).innerText = errors
  },

  renderSignUpErrorMessages: function(errors){
    document.querySelector(this.signUpErrorDivSelector).innerText = errors
  },

  updateUserData: function(html) {
    var currentUserData = this.getCurrentUserData()
    currentUserData.innerHTML = html
  },


  // GET DOM ELEMENT METHODS

  getLoginForm: function() {
    return document.querySelector(this.loginFormSelector)
  },

  getSignUpForm: function() {
    return document.querySelector(this.signUpFormSelector)
  },

  getCurrentUserData: function() {
    return document.querySelector(this.currentUserDataSelector)
  },

  getLoginMenuButton: function() {
    return document.querySelector(this.logInMenuSelector)
  },

  getUserLogWindow: function() {
    return document.querySelector(this.userLogWindowSelector)
  },

  getSessionMenu: function() {
    return document.querySelector(this.sessionMenuSelector)
  },

  getLogOutButton: function() {
    return document.querySelector(this.logOutButtonSelector)
  },

  getSettingsButton: function() {
    return document.querySelector(this.settingsButtonSelector)
  },

  getUpdateLocationDiv: function(){
    return document.querySelector(this.updateLocationDivSelector)
  }
}
