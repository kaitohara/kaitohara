var ApplicationRouter = Backbone.Router.extend({

	initialize: function(el) {
		this.el = el;

		this.test = new ContentView({template: '#test'});
		this.notFoundView = new ContentView({template: '#not-found'});
	},

	routes: {
		"" : "home",
		"test" : "test",
		"*else" : "notFound"
	},

	currentView: null,

	switchView: function(view){
		if (this.currentView){
			this.currentView.remove();
		}

		this.el.html(view.el);

		view.render();

		this.currentView = view;
	},

	test: function(){
		this.switchView(this.testView);
		this.setActiveEntry('#test');
	},
	notFound: function(){
		this.switchView(this.notFoundView)
	}
})