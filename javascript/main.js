$(".next1").click(function() {
    $(".details1").hide();
    $(".details2").show();
    $(".next2").show();
    $(this).hide();
    return false;
});

$(".next2").click(function() {
    $(".details2").hide();
    $(".details3").show();
    $(".next3").show();
    $(this).hide();
    return false;
});

$(".next3").click(function() {
    $(".details3").hide();
    $(".details4").show();
    $(".next4").show();
    $(this).hide();
    return false;
});

$(".next4").click(function() {
    $(".details4").hide();
    $(".details5").show();
    $(".next5").show();
    $(this).hide();
    return false;
});

$(".next5").click(function() {
    $(".details5").hide();
    $(".details1").show();
    $(".next1").show();
    $(this).hide();
    return false;
});


$("form").submit(function(e) {
    return false;
});
