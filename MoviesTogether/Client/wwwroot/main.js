jQuery.noConflict();
(function($){
    $(function(){            
        var visibleSlide=1;
        var maxVisibleSlide=$('.slider-item').length-1;
        $('.slider-move').on('click',function(){
            $clickButton=$(this);
            if($clickButton.hasClass('slider-down')&&(visibleSlide<=maxVisibleSlide)){
                $('.slider-item').css('transform','translateY(-'+(visibleSlide)*100+'%)');
                visibleSlide+=1;
            }else{};
            if($clickButton.hasClass('slider-up')&&(visibleSlide>1)){
                $('.slider-item').css('transform','translateY(-'+ (visibleSlide-2)*100+'%)');
                visibleSlide-=1;
            }else{};
        });
});
})(jQuery);
