import React, { Component } from "react";
import $ from "jquery";
import debounce from "react-debouncing";
import { Link } from "react-router-dom";

export default class Sidemenu extends Component {
  initSidebar = () => {
    const CURRENT_URL = window.location.href.split("#")[0].split("?")[0],
      $BODY = $("body"),
      $SIDEBAR_MENU = $("#sidebar-menu"),
      $SIDEBAR_FOOTER = $(".sidebar-footer"),
      $LEFT_COL = $(".left_col"),
      $RIGHT_COL = $(".right_col"),
      $NAV_MENU = $(".nav_menu"),
      $FOOTER = $("footer");
    // TODO: This is some kind of easy fix, maybe we can improve this
    console.log("init_sidebar");
    var setContentHeight = function() {
      // reset height
      $RIGHT_COL.css("min-height", $(window).height());

      var bodyHeight = $BODY.outerHeight(),
        footerHeight = $BODY.hasClass("footer_fixed") ? -10 : $FOOTER.height(),
        leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
        contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

      // normalize content
      contentHeight -= $NAV_MENU.height() + footerHeight;

      $RIGHT_COL.css("min-height", contentHeight);
    };
    $SIDEBAR_MENU.find("a").on("click", function(ev) {
      console.log("clicked - sidebar_menu");
      var $li = $(this).parent();

      if ($li.is(".active")) {
        $li.removeClass("active active-sm");
        $("ul:first", $li).slideUp(function() {
          setContentHeight();
        });
      } else {
        // prevent closing menu if we are on child menu
        if (!$li.parent().is(".child_menu")) {
          $SIDEBAR_MENU.find("li").removeClass("active active-sm");
          $SIDEBAR_MENU.find("li ul").slideUp();
        } else {
          if ($BODY.is(".nav-sm")) {
            $li
              .parent()
              .find("li")
              .removeClass("active active-sm");
            $li
              .parent()
              .find("li ul")
              .slideUp();
          }
        }
        $li.addClass("active");

        $("ul:first", $li).slideDown(function() {
          setContentHeight();
        });
      }
    });
    //deboucing
    $(window).bind("resize", debounce(setContentHeight, 100));

    // check active menu
    $SIDEBAR_MENU
      .find('a[href="' + CURRENT_URL + '"]')
      .parent("li")
      .addClass("current-page");

    $SIDEBAR_MENU
      .find("a")
      .filter(function() {
        return this.href === CURRENT_URL;
      })
      .parent("li")
      .addClass("current-page")
      .parents("ul")
      .slideDown(function() {
        setContentHeight();
      })
      .parent()
      .addClass("active");

    setContentHeight();

    // fixed sidebar
    if ($.fn.mCustomScrollbar) {
      $(".menu_fixed").mCustomScrollbar({
        autoHideScrollbar: true,
        theme: "minimal",
        mouseWheel: {
          preventDefault: true
        }
      });
    }
  };

  componentDidMount() {
    this.initSidebar();
  }

  render() {
    return (
      <div>
        <div className="left_col scroll-view">
          <div
            className="navbar nav_title"
            style={{
              border: 0
            }}
          >
            <Link to="/" className="site_title">
              <i className="fa fa-calendar" />
              <span>Novedades Admin</span>
            </Link>
          </div>
          <div className="clearfix" /> {/* menu profile quick info */}
          {/* /menu profile quick info */}
          <br /> {/* sidebar menu */}
          <div
            id="sidebar-menu"
            className="main_menu_side hidden-print main_menu"
          >
            <div className="menu_section">
              <h3>General</h3>
              <ul className="nav side-menu">
                <li>
                  <Link to="/dashboard1">
                    <i className="fa fa-users" />
                    Analistas
                  </Link>
                </li>
                <li>
                  <Link to="/Novedades">
                    <i className="fa fa-calendar-plus-o" />
                    Novedades
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* /sidebar menu */}
          {/* /menu footer buttons */}
          {/* /menu footer buttons */}
        </div>
      </div>
    );
  }
}
