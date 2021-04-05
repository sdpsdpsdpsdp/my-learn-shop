import $http from "../http.js"
export const get_base = (url,data) =>{
	return $http({
		url:url,
		data
	})
}

