<script type="text/javascript">
  /*
  * create by lucas.xu
  * 根据加班选择平日或者休息日(法定假日时)，加班开始时间自动刷新更改明细表条目
  */
$(".inputstyle").live("change",function(){
var obj= $(this).attr("id");
var index=obj.lastIndexOf("\_");
obj=obj.substring(index+1,obj.length);
var a=parseInt(obj);
var chose= jQuery("#field6476_"+a).find("option:selected").text();
if(chose=="平日"){
               $("#field6478"+"_"+a+"span").html("17:00");
               $("input#field6478"+"_"+a).val("17:00");
                            }
else if(chose=="休息日"||chose=="法定假日"){
           $("#field6478"+"_"+a+"span").html("08:00");
           $("input#field6478"+"_"+a).val("08:00");
                                   }
});
</script>

<script type="text/javascript">
  /*
  * create by lucas.xu
  * 点击表单中设定的文本框，自动按照需求统计人数
  */
	jQuery(document).ready(function(){ 
        jQuery("#field6822").click(function(){ //点击统计人数
        var b=0;var c=0;var d=0;var e=0;var f=0;var g=0;
        jQuery("input[name='check_node_0']").each(function(){
                        var a = jQuery(this).val();
			var check=jQuery("#field6474"+"_"+a).val();   
				if(check==30){
					b++;
				}else if(check==31){
					c++;
				}else if(check==32){
					d++;             
				}else if(check==21){
					e++;
				}else if(check==20){
					f++;
				}else if(check==18){
					g++;
				}
		});
    $("input[name='field6819']").val(b); 
    $("input[name='field6820']").val(c); 
    $("input[name='field6821']").val(d); 
    $("input[name='field6818']").val(e); 
    $("input[name='field6817']").val(f); 
    $("input[name='field6816']").val(g); 
		});
	});

<script type="text/javascript">
  /*
  * create by lucas.xu
  * 提交表单时自动统计人数，并校验明细表中加班时间，并且更改表单名称，格式：职工加班申请表-申请人-申请时间
  */
  checkCustomize = function (){ //提交时统计人数和判断时间
		var returnval = true;
		var line=1;var b=0;var c=0;var d=0;var e=0;var f=0;var g=0;
		jQuery("input[name='check_node_0']").each(function(){
			var a = jQuery(this).val();                      
			var check=jQuery("#field6474"+"_"+a).val();   
			var beginTime=jQuery("#field6478"+"_"+a).val();
			var endTime=jQuery("#field6479"+"_"+a).val();
			if(beginTime.valueOf()>endTime.valueOf()){
				Dialog.alert("第"+line+"行"+"预计加班开始时间不能大于结束时间");
				returnval = false;
			}else{
				if(check==30){
					b++;
				}else if(check==31){
					c++;
				}else if(check==32){
					d++;             
				}else if(check==21){
					e++;
				}else if(check==20){
					f++;
				}else if(check==18){
					g++;
				}
			}
			line++;
		});
		jQuery("input[name='field6819']").val(b); 
		jQuery("input[name='field6820']").val(c); 
		jQuery("input[name='field6821']").val(d); 
		jQuery("input[name='field6818']").val(e); 
		jQuery("input[name='field6817']").val(f); 
		jQuery("input[name='field6816']").val(g); 
		var user= jQuery("#field6471span").text().replace(/\s/g,''); 
		user=user.substring(0, user.lastIndexOf('x'));//申请人
		var usetime=jQuery("#field6468span").text().replace(/\s/g,'');
		jQuery("#requestname").val("职工加班申请表"+"-"+user+"-"+usetime);
		return returnval;
	}
</script>