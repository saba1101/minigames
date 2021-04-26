
// $('.main-title').on('mouseover',function(e){
//     var rect = e.target.getBoundingClientRect();
//     var x = e.clientX - rect.left; 
//     var y = e.clientY - rect.top; 

//     console.log("Left" + x + "Top" + y);
// })


// $('.main-title p').on('mouseover',function(e){
//     var rect = e.target.getBoundingClientRect();
//     var x = e.clientX - rect.left; 
//     var y = e.clientY - rect.top;
//     console.log(x, " " ,y ); 
//     if(x && y){
//         $('.main-title p').addClass('active') 
//     }else{
//         setTimeout(() => {
//             $('.main-title p').removeClass('active') 
//         }, 200);
//     }
// })

// $('.main-title p').mouseenter(function(){
//         $('.main-title p').addClass('active') 

// }).mouseleave(function(){
//     setTimeout(() => {
//         $('.main-title p').removeClass('active') 
//     }, 900);
// })

// const tilt = $('.game-container, .inner-components').tilt();

// tilt.tilt.destroy.call(tilt)


    function destroyTilt(){
        let customWidth = 840;
        const tilt = $('.game-container, .inner-components').tilt();
        if($(window).width() < customWidth){
            tilt.tilt.destroy.call(tilt)
            console.log("%cTILT JS is Destroyed", "color:red; font-size: 13px; font-weight:700");
        }   
        else{
            console.log("%cTILT JS is Active", "color:green; font-size: 13px; font-weight:700 ");
        }
    }

    destroyTilt();

    $(window).resize(function(){
        let customWidth = 840;
        const tilt = $('.game-container, .inner-components').tilt();
        if($(window).width() < customWidth){
            tilt.tilt.destroy.call(tilt)
            console.log("%cTILT JS is Destroyed", "color:red; font-size: 13px; font-weight:700");
        }   
        else{
            console.log("%cTILT JS is active", "color:green; font-size: 13px; font-weight:700 ");
        }
    })



    function images() {
        var bgComponents = [
            "lime_cube",
            "lime_cube_fragmented",
            "lime_cube_small_fragmented",
            "purple_cube_def",
            "purple_cube_fragmented",
            "red_cube",
            "red_cube_def",
            "red_cube_fragmented",
            "red_cube_small_fragmented",
            "lime_cube",
            "lime_cube_fragmented",
            "lime_cube_small_fragmented",
            "purple_cube_def",
            "purple_cube_fragmented",
            "red_cube",
            "red_cube_def",
            "red_cube_fragmented",
            "red_cube_small_fragmented",
            "lime_cube",
            "lime_cube_fragmented",
        ]


        bgComponents.forEach(el => {
            $('.left, .right', '.bg-component-wrapper').prepend(`<img class="bg-components" src="../assets/images/background/${el}.png">`) 
            let Maxwidth = window.innerWidth;
            let Maxheight = window.innerHeight;
            Maxwidth -= 30;
            Maxheight -= 20;
            Maxwidth = (Maxwidth < 0) ? Maxwidth *= -1 : Maxwidth
            Maxheight = (Maxheight < 0) ? Maxheight *= -1 : Maxheight
            $('.bg-components').each((ind, el)=> {
                $(el).css({
                    left: `${Math.ceil(Math.random() * Maxwidth)}px`,
                    top:  `${Math.ceil(Math.random() * Maxheight)}px`
                })
            })

        });
    
    }

    images()



    $('.bg-components').hide(0)

    $(window).on("load",function(){
        $('.bg-components').show(1000)
    })