sessionController = function(view) {
  this.view = view
}

sessionController.prototype = {
  init: function() {
    this.setListeners()
  },

  setListeners: function() {
    // var signInToggleButton = this.view.getSignInToggleButton()
    // var signUpToggleButton = this.view.getSignUpToggleButton()
    var signInForm = this.view.getSignInForm()
    var signUpForm = this.view.getSignUpForm()


    // signInToggleButton.addEventListener('click', this.toggleSignIn, false)
    // signUpToggleButton.addEventListener('click', this.toggleSignUp, false)
    $(signInForm).on('ajax:success', this.signIn)
    $(signUpForm).on('ajax:success', this.signUp)

  },

  toggleSignIn: function() {
    this.view.toggleSignInForm()
  },

  toggleSignUp: function() {
    this.view.toggleSignUpForm()
  },

  signIn: function(e, response) {
    debugger
  },

  signUp: function(e, response) {
    debugger
  },
}