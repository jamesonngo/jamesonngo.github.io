$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 500 }, "slow");
  return false;
});