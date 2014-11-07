window.FinalProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    this.router = new FinalProject.Routers.Router();

    this.startPusher();
    Backbone.history.start();
  },


  startPusher: function () {
    this.pusher = new Pusher('cafa5f14983aace7cfd9');
    var channel = this.pusher.subscribe('momeRaths');
    this.latest = [];

    channel.bind('newNotification', function (data) {
      console.log("data users", data.users);
      console.log(_.indexOf(data.users, FinalProject.router.currentUser.get("id")));
      if(_.indexOf(data.users, FinalProject.router.currentUser.get("id")) == -1) {
        FinalProject.notifications.trigger("newNotification", data.notification);
      }
    });


  }

};
