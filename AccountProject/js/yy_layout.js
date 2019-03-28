// JavaScript Document

$(document).ready(function(){
	//首页
   var zj_w=$(".zj_wrap").outerWidth();
   $(".zj_wrap").outerHeight(zj_w);
	
	//费用详情
   $(".btn_sh").click(function(){
	   $(this).removeClass("off");
	   $(this).addClass("on");
	   $(".btn_qt").removeClass("on");
	   $(".btn_qt").addClass("off");
   });
	
   $(".btn_qt").click(function(){
	   $(this).removeClass("off");
	   $(this).addClass("on");
	   $(".btn_sh").removeClass("on");
	   $(".btn_sh").addClass("off");
   });
	
	
   //弹窗提示	
	$("#saveAccountBtn").click(function(){
		$("#saveOver").removeClass("none");
		$("#saveOver").addClass("show");
	});
	
	$("#closeSaveOver").click(function(){
		$("#saveOver").removeClass("show");
		$("#saveOver").addClass("none");
	});
	
	$("#showTips").click(function(){
		$("#KJtips").removeClass("none");
		$("#KJtips").addClass("show");
	});
	
	$("#closeKJtips").click(function(){
		$("#KJtips").removeClass("show");
		$("#KJtips").addClass("none");
	});
	
	$("#goCheck").click(function(){
		$("#KJtips").removeClass("show");
		$("#KJtips").addClass("none");
		$("#setKJ").prop('checked',true);
	});
	
	
});