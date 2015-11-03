// Override View.remove()'s default behavior
Backbone.View = Backbone.View.extend({

	remove: function(){
		$(this.el).empty().detach();

		return this;
	}
})

var ContentView = Backbone.View.extend({

	initialize: function(options){
		this.template = options.template;
	},

	render: function(){
		var content = $(this.template).html();
		$(this.el).html(content);

		return this;
	}
});

var ApplicationRouter = Backbone.Router.extend({

	initialize: function(el) {
		this.el = el;

		this.homeView = new ContentView({template: '#home'});
		this.portfolioView = new ContentView({template: '#portfolio'});
		this.aboutView = new ContentView({template: '#about'});
		this.blogView = new ContentView({template:'#blog'});
		this.contactView = new ContentView({template: '#contact'});
		this.notFoundView = new ContentView({template: '#not-found'});
	},

	routes: {
		"" : "home",
		"home": "home",
		"portfolio": "portfolio",
		"about" : "about",
		"blog" : "blog",
		"contact" : "contact",
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

	setActiveEntry: function(url) {

		$('.menu-item').removeClass('active');

		$("a[href='" + url + "']").addClass('active');
	},

	home: function(){
		this.switchView(this.homeView)
		this.setActiveEntry('#home');
	},
	portfolio: function(){
		this.switchView(this.portfolioView)
		this.setActiveEntry('#portfolio');
	},
	about: function(){
		this.switchView(this.aboutView);
		this.setActiveEntry('#about');
	},
	blog: function(){
		this.switchView(this.blogView);
		this.setActiveEntry('#blog');
	},
	contact: function(){
		this.switchView(this.contactView);
		this.setActiveEntry('#contact');
	},
	notFound: function(){
		this.switchView(this.notFoundView);
	}
});
