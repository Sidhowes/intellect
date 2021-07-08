$(window).click(function () {
    $(".popup").click(function () {
        $(".box").show();
    });

    $(".popupCloseButton").click(function () {
        $(".box").hide();
    });
});