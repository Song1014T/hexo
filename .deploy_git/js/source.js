var sourceIdMap=new Map([["25522.html","OL_1690198574085"]]),sourcePriceMap=new Map([["25522.html",.01]]);function isPhone(){var e=navigator.userAgent;return console.log(e),/mobile/i.test(e)}$("#btn_submit_alipay").click((function(){var e=location.href;e=e.substr(e.lastIndexOf("/")+1);var n=document.title,t=isPhone(),a="pc";t&&(a="mobile"),$.ajax({type:"get",url:"https://www.gengtian1.cn/qcz/payment/wechat",data:{type:"alipay",money:sourcePriceMap.get(e),name:n,body:"测试内容",id:sourceIdMap.get(e),device:a},success:function(e){if(null==e)return;200!=e.code&&alert(e.msg),t?window.location.href=e.info:window.open(e.info,"_blank")}})}));