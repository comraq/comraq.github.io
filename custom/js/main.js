var main = function() {
  $(".content-pane").fadeTo(1000, 1);

  $(".nav a").on("click", function() {
    navBar.navUpdateActive(this);
    contentPane.updateContent(this);
  });

  $(".carousel-button").click(function() {
    contentPane.updateContent(this);
  });
 
  $(".project").on({mouseenter: projects.markActive,
                    mouseleave: projects.markInactive});
};

var navBar = {
  navUpdateActive: function(navComp) {
    $(".nav").find(".my-navbar-active").removeClass("my-navbar-active");
    if (!$(navComp).hasClass("dropdown-toggle")) {
      $(navComp).parent().addClass("my-navbar-active");
    };
  }
};

var contentPane = {
  updateContent: function(comp) {
    contentPane.removeContent(comp);
    contentPane.addContent(comp);
  },

  removeContent: function(comp) {
    if (!$(comp).hasClass("dropdown-toggle")) $(".my-containers").fadeTo(500, 0);
  },

  addContent: function(comp) {
    if ($(comp).is("#nav-home")) {
      $(".home-container").fadeTo(500, 1);
    } else if ($(comp).is("#nav-about") || $(comp).is("#carousel-about")) {
      $(".about-container").fadeTo(500, 1);
      navBar.navUpdateActive("#nav-about");      
    } else if ($(comp).is("#nav-projects") || $(comp).is("#carousel-projects")) {
      $(".projects-container").fadeTo(500, 1);
      navBar.navUpdateActive("#nav-projects");
    };
  }
};

var projects = {
  markInactive: function() {
    if ($(this).hasClass("project-jumbo")) {
      $(this).removeClass("rainbow");
      $(this).children("h1").removeClass("rainbow");
    } else {
      $(this).fadeTo(500, 0.7);
    }
  },

  markActive: function() {
    if ($(this).hasClass("project-jumbo")) {
      $(this).addClass("rainbow");
      $(this).children("h1").addClass("rainbow");
    } else {
      $(this).fadeTo(500, 1);
    }
  }
}

$(document).ready(main);
