

$(function () {
  $("input").keydown(function () {
    //to stop too max value  
    // Save old value.
    if (!$(this).val() || (parseInt($(this).val()) <= 9999 && parseInt($(this).val()) >= 0))
    $(this).data("old", $(this).val());
  });
  $("input").keyup(function () {
    // Check correct, else revert back to old value.
    if (!$(this).val() || (parseInt($(this).val()) <= 9999 && parseInt($(this).val()) >= 0))
      ;
    else
      $(this).val($(this).data("old"));
  });

    //to move focus from  input to another length===3 it mean 4 numbers can input
    $("#no1").on("keypress", function () {
        if ($("#no1").val().length === 3) {
            $("#no2").focus();
        }
    });

    $("#no2").on("keypress", function () {
        if ($("#no2").val().length === 3) {
            $("#no3").focus();
        }
    });

    $("#no3").on("keypress", function () {
        if ($("#no3").val().length === 3) {
            $("#no4").focus();
        }
    });
});


/////
//for credit card number
$('.cc-number').on('keyup change', function () {
    if ($(this).val().length == 4) {
        $(this).next().focus();
    } else if ($(this).val().length == 0) {
        $(this).prev().focus();
    }
});

$(".button-cart").on('click', function (e) {
    e.stopPropagation();
    $(".cont-product").addClass("slide-right");
    $(".container").addClass("slide-cont-left");
    $(this).addClass("btn-hiding");
    setTimeout(function () {
        $(".cont-product").addClass("zindex");
    }, 300);
});

$(".product").on('click', function (e) {
    e.stopPropagation();
    $(".cont-options").removeClass("slideup");
    $(".product").removeClass("active");
    $(this).addClass("active");
    $(this).find(".cont-options").addClass("slideup");
});

$(window).on("click", function () {
    $(".product").removeClass("active");
    $(".cont-product").removeClass("zindex");
    $(".cont-product").removeClass("slide-right");
    $(".container").removeClass("slide-cont-left");
    $(".button-cart").removeClass("btn-hiding");
    $(".cont-options").removeClass("slideup");
});
