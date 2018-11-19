$(".next1").click(function() {
    $(".description p").hide();
    $(".details2").show();
    $(".next2").show();
    return false;
});

$(".next2").click(function() {
    $(".description p").hide();
    $(".details3").show();
    $(".next3").show();
    return false;
});

$(".next3").click(function() {
    $(".description p").hide();
    $(".details4").show();
    $(".next4").show();
    return false;
});

$(".next4").click(function() {
    $(".description p").hide();
    $(".details5").show();
    $(".next5").show();
    return false;
});

$(".next5").click(function() {
    $(".description p").hide();
    $(".details1").show();
    $(".next1").show();
    return false;
});

$(".submitted").click(function() {
    $(".description p").hide();
    $(".details1").show();
    $(".next1").show();
    return false;
});


$("form").submit(function(e) {
    $(".description p").hide();
    $(".submitted").show();
    return false;
});
