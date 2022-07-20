$(document).on('ready',function(){

    // anything in url?
    if(window.location.hash){
        let urlSel = window.location.hash.replace('#','');
        if(typeof data[urlSel] != 'undefined') app.sel = urlSel;
        else app.sel = 'missing';
    }else{
        app.sel = 'hello'; // default view
    }

    // handle intitial view load
    app.switchView();
    $('.view-button').removeClass('left-pane-list-item-selected');
    $('[subject="'+app.sel+'"]').addClass('left-pane-list-item-selected');

    // clicking on left pane group shows/hides group within left pane
    $('.group-button').on('click',function(d){
        if (d.target !== this) return;
        let group = $(d.target).attr("id");
        $('[group="'+group+'"]').slideToggle(100);
    }).find('span, img').on('click',function(d){
        if (d.target !== this) return;
        let group = $(d.target).parent().attr("id");
        $('[group="'+group+'"]').slideToggle(100);
    });

    // clicking an item in left pane, to pick new section to show in main pane
    $('.view-button').on('click',function(d){
        if (d.target !== this) return;
        let subject = $(d.target).attr("subject");
        app.sel = subject;
        app.switchView();
        $('.view-button').removeClass('left-pane-list-item-selected');
        $('[subject="'+subject+'"]').addClass('left-pane-list-item-selected');
        if($('.left-pane').css('left')=='0px') $('.left-pane').animate({'left':'-300px'},100);
    }).find('span, img').on('click',function(d){
        if (d.target !== this) return;
        let subject = $(d.target).parent().attr("subject");
        app.sel = subject;
        app.switchView();
        $('.view-button').removeClass('left-pane-list-item-selected');
        $('[subject="'+subject+'"]').addClass('left-pane-list-item-selected');
        if($('.left-pane').css('left')=='0px') $('.left-pane').animate({'left':'-300px'},100);
    });

    // clicking on menu hamburger button, show/hide menu
    $('.menu-button').on('click touchstart',function(d){
        if (d.target !== this) return;
        if($('.left-pane').css('left')=='0px') $('.left-pane').animate({'left':'-300px'},100);
        else $('.left-pane').animate({'left':'0px'},100);
    }).find('img').on('click',function(d){
        if (d.target !== this) return;
        if($('.left-pane').css('left')=='0px') $('.left-pane').animate({'left':'-300px'},100);
        else $('.left-pane').animate({'left':'0px'},100);
    });

});

let app = {

    //sel : 'hello', // default

    switchView: function(){

        // set hash in url
        window.location.hash = this.sel;

        // set title of piece
        $('#title-here').html(data[this.sel].title);

        // set icon of piece
        $('#icon-here').attr('src',data[this.sel].icon);

        // set description(s) of piece, if any
        $('#description-here').html('');
        if(data[this.sel].descriptions.length>0){
            for(i in data[this.sel].descriptions) $('#description-here').append('<p>'+data[this.sel].descriptions[i]+'</p>');
        }

        // set (unordered) list, if any
        $('#list-here').html('');
        if(data[this.sel].list.length>0){
            for(i in data[this.sel].list){
                let text = data[this.sel].list[i];
                $('#list-here').append('<div class="item"><img src="images/bullet-icon.png" class="item-icon"><span>'+text+'</span></div>')
            }
        }

        // set steps (ordered), if any
        $('#steps-here').html('');
        if(data[this.sel].steps.length>0){
            for(i in data[this.sel].steps){
                var number = ('000'+(+i+1)).toString().substring(('000'+(+i+1)).toString().length-3); // need "005" format
                let text = data[this.sel].steps[i];
                $('#steps-here').append('<div class="item"><img src="images/numbers/'+number+'.png" class="item-icon"><span>'+text+'</span></div>')
            }
        }
    },

    toLink: function(url,name){
        return "<a href='"+url+"' target='_new'>"+name+"</a>";
    }
    
    
};
