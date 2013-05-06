function openDiscussion( url ){
    $($('iframe')[0].contentDocument.getElementsByTagName('head')).children().remove();
    $($('iframe')[0].contentDocument.getElementsByTagName('body')).children().remove();
    $($('iframe')[0].contentDocument.getElementsByTagName('body')).append('<center><span>Loading dicussion...</span></center>');
    $.get(url,function(html_page){
        $($('iframe')[0].contentDocument.getElementsByTagName('body')).children().remove();
        var p = $(html_page);
        var tgh = p.filter(function(){ return $(this).is('link') || $(this).is('script') || $(this).is('title') });
        var tgb = p.filter(function(){ return $(this).is('center')});
        tgh.each( function(){
            $($('iframe')[0].contentDocument.getElementsByTagName('head')).append($(this).clone().wrap('<div>').parent().html());
        });
        tgb.each( function(){
            $($('iframe')[0].contentDocument.getElementsByTagName('body')).append($(this).clone().wrap('<div>').parent().html());
        });
        var main_table = $($('iframe')[0].contentDocument.getElementsByTagName('body')).children('center').children('table:first');
        main_table.attr('width' , '100%' );
        main_table.children('tbody').children('tr:first,tr:last').remove();
    });
}
function redraw(){
    if( $ != null && $.ajax != null ){
        //enlarges the page space
        $('table:first').attr('width','95%');
        //set all news links to go to a new page
        $('td.title a').attr('target','_blank');
        $($('table:first tr')[3]).children('td').css('position','relative');
        var css_str = "position: absolute;right: 5;top: 0;border: none;border-left: solid 3px #999;width: 60%;height: 100%;";
        $($('table:first tr')[3]).children('td').append('<iframe src="about:blank" style="'+css_str+'" name="sideframe"></iframe>');
        $('td.subtext a:odd').each( function(){this.href = "javascript:openDiscussion('"+this.href+"');";});
    }else{setTimeout( "redraw()" , 1000 );}
}
var tag_script = document.createElement("script");
tag_script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild( tag_script );
setTimeout( "redraw()" , 1000 );
