'use strict';
//获取数据引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	let label = await db.collection('label').get()
	
	//返回数据给客户端
	if(label==undefined||label.data==undefined){
		return {
			msg:'数据请求失败',
			code:500,
			data:[]
		}
	}
	return {
		msg:'数据请求成功',
		code:200,
		data:label.data
	}
};
