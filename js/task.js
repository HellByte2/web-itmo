message = "Тестовое сообщение";

document.write(message + '<br>');
document.write("Количество символов: " + message.length + '<br>');

altMessage = message.split(' ');
document.write("Количество слов: " + altMessage.length + '<br>');

var currentLocation = window.location;
document.write(currentLocation.href + '<br>');
document.write(currentLocation.protocol + '<br>');

document.write(document.URL.substring(document.URL.lastIndexOf('/')+1,document.URL.lastIndexOf('.')) + '<br>');
document.write(document.URL.substring(document.URL.lastIndexOf('.')+1,document.URL.length) + '<br>');

//var param_string = currentLocation.search.substring(1,currentLocation.search.length);

document.write('<br>');

URL = "https://vk.com/im?sel=1&send=heart&sign=anonymous"

document.write("<br>", URL);

var startQuery = URL.indexOf("?")+1;

let pr = {};

let parametrs = URL.substring(startQuery, URL.length).split("&");
for(let key in parametrs){
	
	pr[parametrs[key].split("=")[0]] = parametrs[key].split("=")[1];
	
}

/*/
var param_string = x.substring(1,x.length);
document.write(param_string + '<br>');

var param_string_split = param_string.split('&');
document.write(param_string_split + '<br>');



var param_name  = [];
var param_value = [];


document.write('<br>');

for (var i = 0; i < param_string_split.length; i++) 
{
    param_string_split_split = param_string_split[i].split('=');


    param_value[i] = param_string_split_split[1];
    param_name[i] = param_string_split_split[0];


    document.write(param_name[i] + '<br>');
    document.write(param_value[i] + '<br>');
}
/*/
document.write('<br>');

x=document.getElementsByTagName("a");

y=0;
f=0; // флаг первого анкора

for (i=0; i<x.length; i++)
{
if (x[i] == "")
    {
        if (f==0) {j=i; f=1;}
        y++;
    } 

}

document.write("Количество анкoров ", y, '<br>');
document.write("Количество ссылок ", x.length-y, '<br>'); 
document.write(x[j].innerHTML, '<br>'); 

x=document.getElementsByTagName("img");
document.write("Количество картинок ", x.length, '<br>');
document.write(x[0].width, '<br>'); 


if (x[1].width>x[0].width) 
	{
		document.write(x[1].width, '<br>'); 
	}

	else
	{
		document.write(x[0].width, '<br>'); 
	}

document.write(x[0].height+x[1].height, '<br>'); 

x=document.getElementsByTagName("form");

for (i=0;i<x.length;i++)
{
	if (i % 2 == 1 ) {document.write(x[i].name, "<br>"); } 

}

function delFunc(myform)
{
	document.getElementById(myform).reset();
}

function showCount(myform)
{
	y=0;
	x=document.getElementById(myform).getElementsByTagName("input");

	for (i=0;i<x.length;i++)
	{
		if ((x[i].type != "button") && (x[i].type != "radio") && (x[i].type != "submit") && (x[i].type != "hidden"))
		{
			y++;
		}
	}
	alert(y);
}









