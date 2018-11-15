$(".next1").click(function() {
    $(".details1").hide();
    $(this).hide();
    $(".details2").show();
    $(".next2").show();
    return false;
});

$(".next2").click(function() {
    $(".details2").hide();
    $(this).hide();
    $(".details3").show();
    $(".next3").show();
    return false;
});

$(".next3").click(function() {
    $(".details3").hide();
    $(this).hide();
    $(".details4").show();
    $(".next4").show();
    return false;
});

$(".next4").click(function() {
    $(".details4").hide();
    $(this).hide();
    $(".details5").show();
    $(".next5").show();
    return false;
});

$(".next5").click(function() {
    $(".details5").hide();
    $(this).hide();
    $(".details1").show();
    $(".next1").show();
    return false;
});


$("form").submit(function(e) {
    return false;
});
