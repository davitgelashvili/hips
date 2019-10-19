$(document).ready(function () {
    $('.login-form-tab-login').click(function () {
        $(this).addClass('active');
        $('.login-form-item').addClass('active');
        $('.reg-form-item').removeClass('active');
        $('.login-form-tab-reg').removeClass('active');
    });
    $('.login-form-tab-reg').click(function () {
        $(this).addClass('active');
        $('.login-form-item').removeClass('active');
        $('.reg-form-item').addClass('active');
        $('.login-form-tab-login').removeClass('active');
    })


    $('.left-top-head > .first').click(function () {
        $('.left-top-body.first').addClass('active');
        $('.left-top-body.second').removeClass('active');
        $('.left-top-body.third').removeClass('active');
    })
    $('.left-top-head > .second').click(function () {
        $('.left-top-body.second').addClass('active');
        $('.left-top-body.first').removeClass('active');
        $('.left-top-body.third').removeClass('active');
    })
    $('.left-top-head > .third').click(function () {
        $('.left-top-body.third').addClass('active');
        $('.left-top-body.first').removeClass('active');
        $('.left-top-body.second').removeClass('active');
    })

    $('.mob-menu').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.menu').css('display', 'none');
        }else{
            $('.menu').css('display', 'flex');
            $(this).addClass('active');
        }
    });


});