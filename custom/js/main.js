var main = function() {
  $(".nav a").on("click", function() {
    navBar.navUpdateActive(this);
    contentPane.updateContent(this);
  });
  

/* Start of My Wip-testing */
  $("#title").mouseenter(function() {
    $("#title").fadeTo('slow', 1);
  });

  $("#title").mouseleave(function() {
    $("#title").fadeTo('slow', 0.3);
  });

  $("button").click(function() {
    $(".wip-description").show();
  });

  $(".wip").mouseleave(function() {
    $(".wip-description").hide();
  });
/* End of My Wip-testing */

};

var navBar = {
  navUpdateActive: function(navComp) {
    $(".nav").find(".active").removeClass("active");
    if (!$(navComp).hasClass("dropdown-toggle")) {
      $(navComp).parent().addClass("active");
    };
  }
};

var contentPane = {
  updateContent: function(navComp) {
    contentPane.removeContent();
    contentPane.addContent(navComp);
  },

  removeContent: function() {
    $(".my-containers").fadeTo(500, 0);
  },

  addContent: function(navComp) {
    if ($(navComp).is("#nav-home")) {
      $("#home-container").fadeTo(500, 1);
    } else if ($(navComp).is("#nav-about")) {
      $("#about-container").fadeTo(500, 1);
    } else if ($(navComp).is("#nav-projects")) {
      $("#projects-container").fadeTo(500, 1);
    };
  }
};

$(document).ready(main);
