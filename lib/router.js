Router.configure({
  layoutTemplate: 'layout',
  loadingTempalte: 'loading',
  waitOn: function() { return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postsList'});

//Router.map(function () {
//    this.route('postsList', {path: '/'});
//});
//
//Router.onBeforeAction('loading');
