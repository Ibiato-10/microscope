var postsData = [
  {
    title: 'introducing Telescope',
    author: 'Majid Al Otaibi',
    url: 'http://icompusys.com/introducing-telescope'
  },
  {
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts: postsData
});
