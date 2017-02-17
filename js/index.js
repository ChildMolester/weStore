$(function(){
    (function(){
        var a = $(".dat-icon-menu .dat-icon-menu-btn");
        var b = $(".dat-back-menu");
        var c = $(".dat-back-menu li");
        var gouwuche_num = 99;

        var method = {
            redCircle:function(tar,num){
                tar.append("<span class='lay-red-circle dat-red-circle'>"+num+"</span>");
            },
            tabBox:function(control,tabContent){
                var a = control.children("li");
                var b = tabContent.children("li");
                a.each(function(){
                    $(this).click(function(){
                        a.removeClass("current");
                        $(this).addClass("current");
                        b.removeClass("current");
                        b.eq($(this).index()).addClass("current");
                    })
                })
            }
        }

        a.each(function(){
            $(this).click(function(){
                var n = $(this).index();
                if(b.hasClass("hide")&&c.eq(n).hasClass("hide")){
                    $(this).addClass("bgc-white").siblings().removeClass("bgc-white");
                    b.removeClass("hide");
                    c.eq(n).removeClass("hide").siblings().addClass("hide");
                    if($(event.target).is($(".icon-sousuo"))){
                        $(".dat-search-input").focus();
                    }
                }else if(!b.hasClass("hide")&&c.eq(n).hasClass("hide")){
                    $(this).addClass("bgc-white").siblings().removeClass("bgc-white");
                    c.eq(n).removeClass("hide").siblings().addClass("hide");
                    if($(event.target).is($(".icon-sousuo"))){
                        $(".dat-search-input").focus();
                    }
                }else{
                    $(this).removeClass("bgc-white");
                    b.addClass("hide");
                    c.eq(n).addClass("hide");
                }                
            });
        });
        $(".dat-back-menu").click(function(event){
            if($(event.target).is($(this))){
                a.removeClass("bgc-white");
                b.addClass("hide");
                c.addClass("hide");
            }
        });
        method.redCircle($(".dat-icon-menu .icon-gouwuche"),gouwuche_num);

        $(".dat-product-color li").each(function(){
            $(this).click(function(){
                $(".dat-product-color li").removeClass("current");
                $(this).addClass("current");
            })
        });
        method.tabBox($(".dat-tabBox-control"),$(".dat-tabBox-tabs"));
        method.tabBox($(".dat-tabBox-control-description"),$(".dat-tabBox-tabs-description"));
        $(".dat-add").click(function(){
            $(".dat-order-num").val(parseInt($(".dat-order-num").val())+1);
        });
        $(".dat-subtract").click(function(){
            var num = parseInt($(".dat-order-num").val());
            (num <= 1)?alert("can't subtract more"):$(".dat-order-num").val(parseInt($(".dat-order-num").val())-1);
        });
        //如果写成给$(".current .dat-icon-up")绑定的话只会绑定一开始的一次，虽然想的很合理，但是这个绑定貌似只在代码加载那时判断是否给元素绑定事件，当时其他的按钮并不符合条件，所以绑定不了事件,也可能和闭包有关
        $(".dat-icon-up").click(function(){
            $(".current .dat-package-con").css({"margin-left":0});
        });
        $(".dat-icon-dow").click(function(){
            $(".current .dat-package-con").css({"margin-left":"-100%"});
        });       
    })();
});
