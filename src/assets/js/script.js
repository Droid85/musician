$(document).ready(function(){
    $(".navigation__button").click(function(){
      $(".navigation__list").show();
      $(".navigation__button").hide();
      $(".navigation__bitton-close").show();
    });
    $(".navigation__bitton-close").click(function(){
      $(".navigation__list").hide();
      $(".navigation__button").show();
      $(".navigation__bitton-close").hide();
    })
  });

