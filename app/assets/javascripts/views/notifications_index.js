FinalProject.Views.NotificationsIndex = Backbone.CompositeView.extend({

  initialize: function () {
    var that = this;
    this.collection = FinalProject.notifications;
    this.collection.fetch({
      success: (function(){
        console.log("Howdy");
        that.render();
      })
    })

    this.listenTo(this.collection, "newNotification", that.addNotification)
  },


  tagName: 'section',
  className: 'notifications',

  template: JST["notifications/index"],

  render: function () {
    var content = this.template();
    this.$el.html(content)

    var that = this
    this.collection.each(function (notification){
      console.log("getting there");
      var show = new FinalProject.Views.NotificationShow({
        model: notification
      })

      that.addSubview(".notifications-list", show);
    });

    return this;

  },


  toggleDisplay: function () {
    console.log("YAY");
    $(".notifications ul").toggleClass("active");
    _(this.subviews("notifications-list")).each(function(show){
      show.read();
    });
  },

  addNotification: function (notification) {
    console.log("Notification data", notification);

    setTimeout((function () {
      FinalProject.latest.shift();
    }), 1000);

    console.log("finding", notification.text, "in", FinalProject.latest);

    if(_.indexOf(FinalProject.latest, notification.text) === -1) {
      FinalProject.notifications.add(notification);
      $("#chat-button").addClass("new-notification");
    }

    FinalProject.latest.push(notification.text);
  },


})
