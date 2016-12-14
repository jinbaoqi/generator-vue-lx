import axios from 'axios';
import Vue from 'vue'

const install = function (Vue,router) {
	var httpPromise = axios.create({
  	baseURL: API_ROOT
	});
	httpPromise.defaults.timeout = 2500;
	httpPromise.interceptors.request.use(function(config){
			if(!config.params){
				config.params = {};
			}else{
				config.params['handle_type'] = 'companypage';
			}
			return config
	},function(error){
		return Promise.reject(error);
	})
	httpPromise.interceptors.response.use(function(response){
			console.log(response);
			//console.log(router.push('/foo'));
			return response;
	},function(error){
		return Promise.reject(error);
	})
	Vue.prototype.$promise = httpPromise
}
module.exports = {
	install
}