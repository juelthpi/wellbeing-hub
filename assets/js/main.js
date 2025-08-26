jQuery(document).ready(function ($) {
  $(document).on("click", function (event) {
    const $div = $("#outside-click");
    const $navbarText = $("#navbarText");
    if (!$div.is(event.target) && $div.has(event.target).length === 0) {
      $navbarText.removeClass("show");
    }
  });
});
