'use strict';



;define("s1-g1-blog-frontend/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTAdapter.extend({
    host: 'http://localhost:3000'
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/app", ["exports", "s1-g1-blog-frontend/resolver", "ember-load-initializers", "s1-g1-blog-frontend/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/components/add-new-post", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    DS: Ember.inject.service('store'),
    actions: {
      openModal: function () {
        this.set('title', null);
        this.set('body', null);
        Ember.$('.ui.newPost.modal').modal({
          closable: false,
          detachable: false,
          onDeny: () => {
            return true;
          },
          onApprove: () => {
            var newPost = this.get('DS').createRecord('post', {
              title: this.get('title'),
              body: this.get('body')
            });
            newPost.save().then(() => {
              return true;
            });
          }
        }).modal('show');
      }
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/components/delete-post", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    DS: Ember.inject.service('store'),
    actions: {
      openModal: function (post) {
        Ember.$('.ui.deletePost.modal').modal({
          closable: false,
          detachable: false,
          onDeny: () => {
            return true;
          },
          onApprove: () => {
            this.get('DS').findRecord('post', this.ID).then(function (post) {
              post.deleteRecord();
              post.get('isDeleted');
              post.save();
            });
            return true;
          }
        }).modal('show');
      }
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/components/edit-post", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    DS: Ember.inject.service('store'),
    actions: {
      openModal: function (model, ID, title) {
        console.log(title);
        this.set('title', title); //this.set('body',model.body);

        Ember.$('.ui.editPost.modal').modal({
          closable: false,
          detachable: false,
          onDeny: () => {
            return true;
          },
          onApprove: () => {
            // alert($('#editPostTitle').val());
            this.get('DS').findRecord('post', this.ID).then(function (post) {
              post.set('title', Ember.$('#editPostTitle').val());
              post.set('body', Ember.$('#editPostBody').val());
              post.save();
            });
            return true;
          }
        }).modal('show');
      }
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/components/ui-accordion", ["exports", "semantic-ui-ember/components/ui-accordion"], function (_exports, _uiAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiAccordion.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-checkbox", ["exports", "semantic-ui-ember/components/ui-checkbox"], function (_exports, _uiCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-dimmer", ["exports", "semantic-ui-ember/components/ui-dimmer"], function (_exports, _uiDimmer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDimmer.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-dropdown", ["exports", "semantic-ui-ember/components/ui-dropdown"], function (_exports, _uiDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDropdown.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-embed", ["exports", "semantic-ui-ember/components/ui-embed"], function (_exports, _uiEmbed) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiEmbed.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-modal", ["exports", "semantic-ui-ember/components/ui-modal"], function (_exports, _uiModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-nag", ["exports", "semantic-ui-ember/components/ui-nag"], function (_exports, _uiNag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiNag.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-popup", ["exports", "semantic-ui-ember/components/ui-popup"], function (_exports, _uiPopup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-progress", ["exports", "semantic-ui-ember/components/ui-progress"], function (_exports, _uiProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-radio", ["exports", "semantic-ui-ember/components/ui-radio"], function (_exports, _uiRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-rating", ["exports", "semantic-ui-ember/components/ui-rating"], function (_exports, _uiRating) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRating.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-search", ["exports", "semantic-ui-ember/components/ui-search"], function (_exports, _uiSearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSearch.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-shape", ["exports", "semantic-ui-ember/components/ui-shape"], function (_exports, _uiShape) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiShape.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-sidebar", ["exports", "semantic-ui-ember/components/ui-sidebar"], function (_exports, _uiSidebar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSidebar.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/ui-sticky", ["exports", "semantic-ui-ember/components/ui-sticky"], function (_exports, _uiSticky) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSticky.default;
    }
  });
});
;define("s1-g1-blog-frontend/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("s1-g1-blog-frontend/helpers/app-version", ["exports", "s1-g1-blog-frontend/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/helpers/map-value", ["exports", "semantic-ui-ember/helpers/map-value"], function (_exports, _mapValue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapValue.default;
    }
  });
  Object.defineProperty(_exports, "mapValue", {
    enumerable: true,
    get: function () {
      return _mapValue.mapValue;
    }
  });
});
;define("s1-g1-blog-frontend/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "s1-g1-blog-frontend/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/initializers/export-application-global", ["exports", "s1-g1-blog-frontend/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/mixins/base", ["exports", "semantic-ui-ember/mixins/base"], function (_exports, _base) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _base.default;
    }
  });
});
;define("s1-g1-blog-frontend/models/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    title: _emberData.default.attr(),
    body: _emberData.default.attr()
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/router", ["exports", "s1-g1-blog-frontend/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('posts');
    this.route('home', {
      path: '/'
    });
    this.route('about');
    this.route('contact', function () {
      this.route('email');
      this.route('phone');
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("s1-g1-blog-frontend/routes/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/routes/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/routes/contact/email", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/routes/contact/phone", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/routes/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/routes/posts", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('post');
    }

  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/serializers/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTSerializer.extend({
    primaryKey: '_id'
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("s1-g1-blog-frontend/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "wPZfd2at",
    "block": "{\"symbols\":[],\"statements\":[[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"About Page\"],[10],[0,\"\\n\"],[7,\"h3\"],[9],[0,\"Team S1G1\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The purpose of this tutorial is to provide a basic understanding of Ember js framework\"],[10],[0,\"\\n\\n\"],[1,[21,\"show-logo\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/about.hbs"
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vO1BPmxW",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui segment\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"image\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"class\",\"ui small centered image\"],[11,\"src\",\"assets/images/UWindsor_Logo_Rev.png\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"ui attached stackable inverted menu\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"home\"],null,{\"statements\":[[0,\"    \"],[7,\"a\"],[11,\"class\",\"item\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"home icon\"],[9],[10],[0,\"\\n      Home\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"link-to\",[\"posts\"],null,{\"statements\":[[0,\"    \"],[7,\"a\"],[11,\"class\",\"item\"],[9],[0,\"Posts\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"link-to\",[\"contact\"],null,{\"statements\":[[7,\"a\"],[11,\"class\",\"item\"],[9],[0,\"Contact\"],[10]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"link-to\",[\"about\"],null,{\"statements\":[[0,\"    \"],[7,\"a\"],[11,\"class\",\"item\"],[9],[0,\"About\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\\n\"],[7,\"div\"],[11,\"class\",\"ui container\"],[9],[0,\"\\n  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"ui padded grid\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"fourteen wide column\"],[9],[0,\"\\n    Copyright symbol - S1G1 Blog 2019\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"two wide column\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui centered\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"class\",\"ui tiny image\"],[11,\"src\",\"assets/images/UWindsor_Logo_Rev.png\"],[11,\"alt\",\"image not found\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/templates/components/add-new-post", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dd8wf2pt",
    "block": "{\"symbols\":[],\"statements\":[[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui blue button\"],[9],[0,\"\\n  Add New Post\\n\"],[3,\"action\",[[22,0,[]],\"openModal\"]],[10],[0,\"\\n\\n\"],[4,\"ui-modal\",null,[[\"name\",\"class\"],[\"newPost\",\"newPost\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"header\"],[9],[0,\"\\n    Adding new post\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"content\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui form\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"field\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"Post Title\"],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"cols\",\"rows\",\"value\",\"placeholder\"],[\"text\",\"50\",\"1\",[23,[\"title\"]],\"add title\"]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"field\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"Post Body\"],[10],[0,\"\\n        \"],[1,[27,\"textarea\",null,[[\"value\",\"cols\",\"rows\",\"placeholder\"],[[23,[\"body\"]],\"50\",\"3\",\"add body\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"actions\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui black deny button\"],[9],[0,\"\\n      Cancel\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui positive right labeled icon button\"],[9],[0,\"\\n      Save\\n      \"],[7,\"i\"],[11,\"class\",\"checkmark icon\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/components/add-new-post.hbs"
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/templates/components/delete-post", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "876VFT5L",
    "block": "{\"symbols\":[],\"statements\":[[7,\"button\"],[11,\"class\",\"ui mini circular icon red button\"],[11,\"title\",\"Delete\"],[9],[0,\"\\n  \"],[7,\"i\"],[11,\"class\",\"remove icon\"],[9],[10],[0,\"\\n\"],[3,\"action\",[[22,0,[]],\"openModal\"]],[10],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/components/delete-post.hbs"
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/templates/components/edit-post", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "XvwF3Nvs",
    "block": "{\"symbols\":[],\"statements\":[[7,\"button\"],[11,\"class\",\"ui mini circular icon green button\"],[11,\"title\",\"Edit\"],[9],[0,\"\\n  \"],[7,\"i\"],[11,\"class\",\"write icon\"],[9],[10],[0,\"\\n\"],[3,\"action\",[[22,0,[]],\"openModal\",[23,[\"model\"]],[23,[\"ID\"]],[23,[\"title\"]]]],[10],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/components/edit-post.hbs"
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/templates/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nWyflyMZ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"h2\"],[9],[0,\" Contact Information\"],[10],[0,\"\\n\"],[7,\"h3\"],[9],[0,\" Team S1G1 \"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui list\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"item\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"contact.phone\"],null,{\"statements\":[[0,\"      \"],[7,\"i\"],[11,\"class\",\"phone icon\"],[9],[10],[0,\"\\n      Phone\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"item\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"contact.email\"],null,{\"statements\":[[0,\"      \"],[7,\"i\"],[11,\"class\",\"mail icon\"],[9],[10],[0,\"\\n      Email\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/contact.hbs"
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/templates/contact/email", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4STG8WCj",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h3\"],[9],[0,\"Email Address\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\" S1G1@uwindsor.ca \"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/contact/email.hbs"
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/templates/contact/phone", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "c3/4ivjs",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h3\"],[9],[0,\"Cell Phone\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\" 123-456-7890 \"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/contact/phone.hbs"
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/templates/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JMUtvS+A",
    "block": "{\"symbols\":[],\"statements\":[[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"h1\"],[9],[0,\"Welcome to my Home page\"],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"\\n  I am learning Ember.js to be equipped by one of the powerful and ambitious Web Development Framework.\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/home.hbs"
    }
  });

  _exports.default = _default;
});
;define("s1-g1-blog-frontend/templates/posts", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VqT/0enG",
    "block": "{\"symbols\":[\"onePost\"],\"statements\":[[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"h2\"],[9],[0,\" Blog Posts\"],[10],[0,\"\\n\\n\"],[4,\"ui-modal\",null,[[\"name\",\"class\"],[\"editPost\",\"editPost\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"header\"],[9],[0,\"\\n    Edit post\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"content\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui form\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"field\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"Post Title\"],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"name\",\"cols\",\"rows\",\"value\",\"placeholder\"],[\"text\",\"editPostTitle\",\"editPostTitle\",\"50\",\"1\",[23,[\"title\"]],\"add title\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"field\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"Post Body\"],[10],[0,\"\\n        \"],[1,[27,\"textarea\",null,[[\"id\",\"name\",\"value\",\"cols\",\"rows\",\"placeholder\"],[\"editPostBody\",\"editPostBody                                                                                                           \",[23,[\"body\"]],\"50\",\"3\",\"add body\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"actions\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui black deny button\"],[9],[0,\"\\n      Cancel\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui positive right labeled icon button\"],[9],[0,\"\\n      Save\\n      \"],[7,\"i\"],[11,\"class\",\"checkmark icon\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"ui-modal\",null,[[\"name\",\"class\"],[\"deletePost\",\"deletePost\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"ui icon header\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"warning sign icon\"],[9],[10],[0,\"\\n    Please Confirm..\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"content\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Are you sure you need to delete this post?\"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"actions\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui red cancel inverted button\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"remove icon\"],[9],[10],[0,\"\\n      No\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui green ok inverted button\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"checkmark icon\"],[9],[10],[0,\"\\n      Yes\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui grid\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"eight wide column\"],[9],[0,\"\\n      \"],[1,[22,1,[\"title\"]],false],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[22,1,[\"body\"]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"four wide column right aligned\"],[9],[0,\"\\n      \"],[1,[27,\"edit-post\",null,[[\"model\",\"ID\",\"title\"],[[22,1,[]],[22,1,[\"id\"]],[22,1,[\"title\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"four wide column left aligned\"],[9],[0,\"\\n      \"],[1,[27,\"delete-post\",null,[[\"ID\"],[[22,1,[\"id\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\"],[1,[21,\"add-new-post\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "s1-g1-blog-frontend/templates/posts.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('s1-g1-blog-frontend/config/environment', [], function() {
  var prefix = 's1-g1-blog-frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("s1-g1-blog-frontend/app")["default"].create({"name":"s1-g1-blog-frontend","version":"0.0.0"});
          }
        
//# sourceMappingURL=s1-g1-blog-frontend.map
