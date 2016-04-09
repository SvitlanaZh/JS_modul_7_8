$(function() {
//===================TABS SECTION==========================
    var $firstTab = $('.tabs__first');
    var $firstTabContent = $('.first');
    var $secondTab = $('.tabs__second');
    var $secondTabContent = $('.second');
    var $thirdTab = $('.tabs__third');
    var $thirdTabContent = $('.third');

    $firstTab.on('click', function() {
        $firstTab.attr('id', 'active');
        $firstTabContent.attr('id', 'active');
        $secondTab.removeAttr('id', 'active');
        $secondTabContent.removeAttr('id', 'active');
        $thirdTab.removeAttr('id', 'active');
        $thirdTabContent.removeAttr('id', 'active');
    });

    $secondTab.on('click', function() {
        $firstTab.removeAttr('id', 'active');
        $firstTabContent.removeAttr('id', 'active');
        $secondTab.attr('id', 'active');
        $secondTabContent.attr('id', 'active');
        $thirdTab.removeAttr('id', 'active');
        $thirdTabContent.removeAttr('id', 'active');
    });

    $thirdTab.on('click', function() {
        $firstTab.removeAttr('id', 'active');
        $firstTabContent.removeAttr('id', 'active');
        $secondTab.removeAttr('id', 'active');
        $secondTabContent.removeAttr('id', 'active');
        $thirdTab.attr('id', 'active');
        $thirdTabContent.attr('id', 'active');
    });

//===================INPUT SECTION==========================

    var $firstName = $('.input__first');
    var $lastName = $('.input__second');
    var $adress = $('.input__third');
    var $button = $('button');

    $firstName.hover(function() {
        $('.hint__first').css({opacity: 1});
    }, function() {
        $('.hint__first').css({opacity: 0});
    });

    $lastName.hover(function() {
        $('.hint__second').css({opacity: 1});
    }, function() {
        $('.hint__second').css({opacity: 0});
    });

    $adress.hover(function() {
        $('.hint__third').css({opacity: 1});
    },  function() {
        $('.hint__third').css({opacity: 0});
    });

    $button.on('click', function() {
        $('.hint').css({opacity: 1});
    })

});
