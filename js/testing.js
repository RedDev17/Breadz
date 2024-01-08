// Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("500")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(500);
            $(".post-box")
            .filter("." + value)
            .show("500")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});