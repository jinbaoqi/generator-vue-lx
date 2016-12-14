import axios from 'axios';
import Vue from 'vue'
var DEFAULT_OPTIONS = {
    baseUrl: i18nUrl,
    fallbackLanguage: "zh_CN",
    timeout: 3000,
};
const install = function(Vue,options){
		Vue.prototype.$language = 'zh_CN';
    Vue.prototype.$i18n = {};
    function createXmlHttpRequest(){    
	    if(window.ActiveXObject){ //如果是IE浏览器    
	        return new ActiveXObject("Microsoft.XMLHTTP");    
	    }else if(window.XMLHttpRequest){ //非IE浏览器    
	        return new XMLHttpRequest();    
	    }    
		}
		var httpRequese = function(opt){
			var xhr = createXmlHttpRequest();
			if (xhr == null) {  
        return;  
      }
      xhr.onreadystatechange = function () {  
        //HTTP 请求的状态.当一个 XMLHttpRequest 初次创建时，这个属性的值从 0 开始，直到接收到完整的 HTTP 响应，这个值增加到 4  
        if (xhr.readyState == 4) {  
          //指定了请求的 HTTP 的状态代码(200表示正常,404表示未找到)  
          if (xhr.status == 200) {
          	var responseText=JSON.parse(xhr.responseText); 
            opt.success(responseText) 
          }else{
          	if(opt.error==undefined ||opt.error==null){
		 					alert("没有设置处理数据返回失败的处理方法！");  
		          alert("HTTP的响应码：" + xhr.status + ",响应码的文本信息：" + xhr.statusText); 
          	}else{
          		opt.error(xhr.status,xhr.statusText)
          	}
          	
          }
        }  
      }
      xhr.open(opt.method, opt.url, opt.async);
      xhr.send(null)
		}
    var opts = Object.assign(DEFAULT_OPTIONS,options);
    Vue.prototype.$setLanguage = function(language,callback){
        var vm = this;
        var url = opts.baseUrl + "/" + language + ".json";
        var fallbackUrl = opts.baseUrl + "/" + opts.fallbackLanguage + ".json";
        httpRequese({
					url:url,
					method:'get',
					async:false,
					success:function(data){
						Vue.prototype.$language = language;
                Vue.prototype.$i18n = data;
                update(vm.$root)
                if (callback) {
                    callback();
                }
					},
					error:function(){
						httpRequese({
							url:fallbackUrl,
							method:'get',
							async:false,
							success:function(data){
								Vue.prototype.$language = language;
		                Vue.prototype.$i18n = data;
		                update(vm.$root)
		                if (callback) {
		                    callback();
		                }
							},
							error:function(){
								console.log('读取失败');
							}
						})
					}
				})
    }
    Vue.prototype.$setLanguage(Vue.prototype.$language)
}
module.exports = {
	install
}
function update(vm) {
    if(vm){
        var i = vm._watchers.length;
        while (i--) {
            vm._watchers[i].update(true); // shallow updates
        }
        var children = vm.$children;
        i = children.length;
        while (i--) {
            var child = children[i];
            update(child);
        }
    }

}