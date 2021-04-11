import EmberRouter from '@ember/routing/router';
import config from 'ember-quickstart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('clothes', function() {
    this.route('t-shirt');
  });

  this.route('items', {
    path: '/item/:item_id'
  });
  this.route('not-found', {
    path: '/*path'
  });

  this.route('cart', {
    path: '/shopping-cart'
  });
});
