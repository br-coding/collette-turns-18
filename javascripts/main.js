$(function(){
  InitHtmlInclude()

  var mainObj = $('main');
});

function InitHtmlInclude() {
  w3.includeHTML();
}

function linkFunc(e) {
  $('.section-hero').addClass('hide')
  $('.section-entourage').addClass('show')
}

function showTop(e) {
  $('.section-hero').removeClass('hide')
  $('.section-entourage').removeClass('show')
}