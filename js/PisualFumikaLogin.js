//Vida Search main Javascript
//DSN Pisual FumikaSystem VidaSearch Center Javascript

var url;//Receave url
var json;
var data;
var basePath;
function LoadData()
{
	
}

function PostJsonAjax(url,basePath)
{
	this.basePath = basePath;
	$.ajax({ 
		type:'post', 
		url:url, 
		data:jsonData(),
		timeout: 1000,
		beforeSend:beforecall, 
		success:callback,
		error:callerror
		}); 

}

//<p>封装Json数据</p>
function jsonData(){ 
$("#Loading").fadeTo(200, 1);
var jsonStr = $("#Safelogin").formSerialize();
return jsonStr;
} 

//调用前方法
function beforecall(){ 
	
	
} 

//回调函数 
function callback(data){ 
	if(data == "success")
	{
	$("#Loading").fadeOut(500);
	top.location.href = (basePath+"/index.jsp");	
	}
	else
	{
	alert(data);
	$("#Loading").fadeOut(500);
	}
} 

function callerror(data)
{
	alert(data);
	$("#Loading").fadeOut(500);
	alert("error");
}
