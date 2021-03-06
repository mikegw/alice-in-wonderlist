FinalProject.Views.Landing = Backbone.View.extend({

  initialize: function () {

  },

  className: "new-session-page",

  events: {
    "submit .sign-up-form": "signUp",
    "submit .sign-in-form": "signIn",
    "click .demo-button": "demo"
  },

  template: JST['landing'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  signIn: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();

    $.ajax({
      url: "/api/session",
      type: "POST",
      data: params,
      success: function () {
        console.log("Signed in");
        window.location = "/"
      },
      error: function () {
        console.log("Failed to sign in!");
        $(event.currentTarget).$("#user-password").val("");
      }
    });


  },

  signUp: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();

    $.ajax({
      url: "/api/users",
      type: "POST",
      data: params,
      success: function () {
        console.log("Signed in");
        window.location = "/"
      },
      error: function () {
        console.log("Failed to create!");
        $(event.currentTarget).$("#user-password").val("");
      }
    });


  },


  demo: function (event) {
    event.preventDefault();
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: {
        email: "alice@wonderland.com",
        password: "alicealice"
      },
      success: function () {
        console.log("Signed in");
        window.location = "/"
      },
      error: function () {
        console.log("Failed to sign in!");
        $(event.currentTarget).$("#user-password").val("");
      }
    });
  }


});
