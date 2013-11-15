(function(){ 
    if (navigator.appName == 'Microsoft Internet Explorer'){
            var ua = navigator.userAgent;
            var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat( RegExp.$1 );
            else rv = "";

        if(rv<=9){
          $("input[type='text']").each(function(){
            $(this).focus(function () {
                    if ($(this).val() === $(this).attr('placeholder'))
                        $(this).val('');
                });
            $(this).blur(function () {
                    if ($(this).val() == '')
                        $(this).val($(this).attr('placeholder'));
                }).blur();
          });
        }
        if(rv == 7){
          $("#ft-code").click(function(){
            $(".flight-form .select .input").hide();
            $("#icon_close").click(function(){
              $(".flight-form .select .input").show();
            });
          });
        }
    } else if((navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false )){
        $(".flight-form .field input").css("width", "160px");
    }
    var re = new RegExp("</?\\w+((\\s+\\w+(\\s*=\\s*(?:\".*?\"|'.*?'|[^'\">\s]+))?)+\s*|\s*)/?>|;|/|\\(.+?\\)", "g"),
        searchForm = $("#search_form"),
        searchInput = $("#search_input");
    searchForm.submit(function(){
        searchInput.val(searchInput.val().replace(re, " "));
    });

})();
//Dropdowns
(function(){
    var valueSelects = function(){
          var adult = $("#ft-adult"),
            child = $("#ft-child"),
            baby = $("#ft-baby"),
            numAdult = adult.val(),
            numChild = child.val(),
            numBaby = baby.val(),
            leftAdult = 8 - numAdult;
        child.prev().find("li").each(function(a){
            if(a > leftAdult)
                $(this).css("display", "none");
            else
                $(this).removeAttr("style");
        });
        if(numChild > leftAdult){
            child.val(0);
            var span = child.prev().prev(),
                li = child.prev().find("li").first();
            span.html(li.html());
        }
        baby.prev().find("li").each(function(a){
            if(a > leftAdult || a > numAdult || a > 8 - (parseInt(numAdult) + parseInt(numChild)))
                $(this).css("display", "none");
            else
                $(this).removeAttr("style");
        });
        if(numBaby > leftAdult || numBaby > numAdult || numBaby > 8 - (parseInt(numAdult) + parseInt(numChild))){
            baby.val(0);
            var span = baby.prev().prev(),
                li = baby.prev().find("li").first();
            span.html(li.html());
        }
    }
    valueSelects();
    $(".select span").click(function(a){
        a.stopPropagation();
        var list = $(this).next();
        if(!list.hasClass("active")){
            $(".select ul").removeClass("active");
            list.addClass("active");
        } else{
            list.removeClass("active");
        }
    });
    $(".select .latin").click(function(a){
        a.stopPropagation();
        var list = $(this).parent().parent().find("ul").first();
        if(!list.hasClass("active")){
            $(".select ul").removeClass("active");
            list.addClass("active");
        } else{
            list.removeClass("active");
        }
    });
    $(".select li").click(function(a){
        var content = $(this).html(),
            val = $(this).data("val"),
            select = $(this).parent().parent().parent();
        if(select.hasClass("latam")) content += "<span class='latin'></span>";
        $(this).parent().prev().html(content);
        $(this).parent().next().val(val);
        valueSelects();
        numCupons = addCupons();
    });
    $("body, html").click(function(){
        $(".select ul").removeClass("active");
        $(".countries ul").removeClass("active");
    });
    $(".countries a").first().click(function(a){
        a.preventDefault();
        a.stopPropagation();
        var ul = $(".countries ul");
        if(!ul.hasClass("active")) ul.addClass("active");
        else ul.removeClass("active");
    });
    $(".countries ul li").mouseover(function(){
        $(this).prepend("<i></i>");
    });
    $(".countries ul li").mouseout(function(){
        $(this).find("i").remove();
    });
})();


(function(){
    var left = $(".carousel .left"),
        right = $(".carousel .right"),
        items = $(".carousel .item"),
        counter = $(".slide_contador"),
        count_promo = counter.length,
        count = items.length,
        current = 0,
        time = 7000;
    var rotationRight = function(){
        var next = 0;

        if(current + 1 >= count) next = 0;
        else next = current + 1;

        items.eq(current).animate({
            opacity: .3
        }, 500, function(){
            $(this).removeClass("visible");
            items.eq(next).css('opacity', '.4');
            items.eq(next).addClass("visible");
            items.eq(next).animate({
                opacity: 1
            }, 500, function(){
                current = next;
                slider = setTimeout(function (){
                    rotationRight();
                }, time);
            });
        });
    },
    rotationLeft = function(){
        var next = 0;

        if(current - 1 < 0) next = count - 1;
        else next = current - 1;

        items.eq(current).animate({
            opacity: .3
        }, 500, function(){
            $(this).removeClass("visible");
            items.eq(next).css('opacity', '.4');
            items.eq(next).addClass("visible");
            items.eq(next).animate({
                opacity: 1
            }, 500, function(){
                current = next;
                slider = setTimeout(function (){

                    rotationRight();
                }, time);
            });
        });
    };

    slider = setTimeout(function(){
        rotationRight();
    }, time);

    left.click(function(a){
        a.preventDefault();
        clearTimeout(slider);
        rotationLeft(a);
    });
    right.click(function(a){
        a.preventDefault();
        clearTimeout(slider);
        rotationRight(a);
    });
    if(count_promo > 0){
        $(".buttons").remove();
    }
})();
$(".offer_terms").click(function(a){ a.stopPropagation(); });
$(document).on('click', '.autocomplete-option a', function(a){
    a.preventDefault();
    a.stopPropagation();
});
$(document).on('click', ".ui-datepicker-prev, .ui-datepicker-next", function(a){ a.preventDefault(); });
// modal boxes
(function(){
    
    var url = window.location.pathname.split( '/' ),
        modalBox = function(){
        var shade = "<div class='serv-shadow'></div>",
            body = "<div class='modal-serv'><div class='content'><h4><i></i></h4><span class='close-mod'>x</span><form action=''></form></div></div>",
            invoice = {
                element: 'invoice',
                inputs: ["<input type='text' placeholder='Ingresa tu código de reservación'>",
                        "<input type='text' placeholder='Escribe tus apellidos'>"],
                button: "<input class='buy' type='submit' value='Consultar'>",
                height: '130px'
            },
            flight = {
                element: 'flight',
                inputs: ["<input type='text' placeholder='Ingresa tu código de reservación'>",
                        "<div class='style-select'><select><option value='0' selected>14 de octubre 2013</option></select></div>"],
                button: "<input class='buy' type='submit' value='Consultar'>",
                height: '130px'
            },
            check = {
                element: 'check-in',
                inputs: ["<input type='text' placeholder='Escribe tus apellidos'>",
                        "<div class='style-select'><select><option value='0' selected>Ciudad de origen</option></select></div>",
                        "<div class='option'><input type='radio' name='group1' value='clave'><span>Clave de reservación</span></div>",
                        "<div class='option'><input type='radio' name='group1' value='club'><span>Número de Club Premier</span></div>",
                        "<input type='text' placeholder='Introduce tu número'>"],
                button: "<input class='buy' type='submit' value='Check-In'>",
                height: '200px'
            },
            change = {
                element: 'changes',
                inputs: ["<input type='text' placeholder='Ingresa tu clave de reservación'>",
                        "<input type='text' placeholder='Escribe tus apellidos'>"],
                button: "<input class='buy' type='submit' value='Consultar'>",
                height: '130px'
            },
            reserv = {
                element: 'reserv',
                inputs: ["<input type='text' placeholder='Ingresa tu código de reservación'>",
                        "<input type='text' placeholder='Escribe tus apellidos'>"],
                button: "<input class='buy' type='submit' value='Consultar'>",
                height: '130px'
            },
            services = [invoice, flight, check, change, reserv];
        //event to create modal box
        $(".services h4 a").on('click', function(e){
            e.preventDefault();
            var winHeight,
                title = $(this).parent().text(),
                className = $(this).parent().attr('class'),
                $body = $("body"),
                $modal,
                $shadow,
                i = services.length;
            //verify if window.innerHeight is defined if not, then use document.documentElement.clientWidth to calculate height
            (window.innerHeight === undefined) ? (winHeight = document.documentElement.clientWidth/4) : (winHeight = (window.innerHeight/3)+20);
            // append the shadow and the principal structure of modal box
            $body.append(shade);
            $body.append(body);
            // append the title for modal box
            $(".modal-serv .content h4").append(title);

            $modal = $('.modal-serv');
            $shadow = $(".serv-shadow");

            while(i--) {
                var service = services[i];
                //select the correct content for each modal box
                if (service.element === className) {
                    //add the correct class for icon element
                    $('.modal-serv .content h4 i').addClass(service.element);
                    // add inputs inside form
                    for (var x = 0, y = service.inputs.length; x < y; x++) {
                        $('.modal-serv .content form').append(service.inputs[x]);
                    };
                    //add the submit button
                    $('.modal-serv .content form').append(service.button);
                    //resize modal box 
                    $modal.css('height',service.height);
                };
                
            };
            //use jquery to put placeholders when is  IE8 or IE9
            if ((navigator.appVersion.indexOf("MSIE 8.")!=-1) || (navigator.appVersion.indexOf("MSIE 9.")!=-1)) {
                $('input[placeholder]').each(function(){  
                    var input = $(this);        
                    $(input).val(input.attr('placeholder'));
                    $(input).focus(function(){
                         if (input.val() == input.attr('placeholder')) {
                             input.val('');
                         }
                    });
                    $(input).blur(function(){
                        if (input.val() == '' || input.val() == input.attr('placeholder')) {
                            input.val(input.attr('placeholder'));
                        }
                    });
                });
            };
            //centered vertically to modal box
            $modal.css('top',$(window).scrollTop()+winHeight);
            // display shadow and modal box
            $shadow.fadeIn();
            $modal.fadeIn();
            //add event after create modal box
            closeModal($modal, $shadow);
        });

        function closeModal(modal, shadow) {
            //remove shadow and modal box after clicked it
            $(".modal-serv span.close-mod").on('click', function(){
                modal.fadeOut(400, function(){
                    $(this).remove();
                });
                shadow.fadeOut(400, function(){
                    $(this).remove();
                });
            });
        }
    }
    //call function: "modalBox", only in mexico's site
    if (url[1] === 'mx') {
        modalBox();
    };
})();