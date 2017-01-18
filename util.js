var util = {
	/**
	 * 获取URL中的参数值
	 * @param  {[string]} name [要获取到的参数名]
	 * @param  {[string]} url  [为空则取当前页面]
	 * @return {[type]}      [返回参数的值]
	 */
	getParam: function (name, url) {
		var u = arguments[1] || window.location.search.replace("&amp;", "&"),
			  reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
			  result = u.substr(u.indexOf("\?") + 1).match(reg);
		return result != null ? result[2] : "";
	}
}
