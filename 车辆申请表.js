<script type="text/javascript">
  /*
  * create by lucas.xu
  * oa用车申请单标题更改为以 车牌-地点-时间-使用人格式显示
  */
checkCustomize = function (){ //提交时统计人数和判断时间
		var returnval = true;
                var carcode=jQuery("#field6330span").text().replace(/\s/g,'');   /*车牌*/
                carcode=carcode.substring(0, carcode.lastIndexOf('x')); 
                var user= jQuery("#field6774span").text().replace(/\s/g,'');     /*用车人*/
                var reg=/x/g;
                user=user.replace(reg,'-');
                user=user.substring(0, user.lastIndexOf('-')); 
                var area=jQuery("input#field6773").val();                        /*地点*/
                var usetime=jQuery("#field6337span").text().replace(/\s/g,'');   /*时间*/
                var name=carcode+"-"+area+"-"+usetime+"-"+user;
                jQuery("#requestname").val(name);  
                return returnval;
}
</script>








































































































