 $("button").click(function(){
    
var xhr = new XMLHttpRequest();
var phonenumber = $("#phone").val();
var content = $("#content").val();
var apikey = "YOUR_API_KEY";
if (phonenumber=='' || content=='')
{
    alert("please input phone number and message content");
    return;
}
console.log(content);
var apistring = "https://platform.clickatell.com/messages/http/send?apiKey="+ apikey+ "&to=" + phonenumber + "&content=" + content;
console.log(apistring);
xhr.open("GET", apistring, true);

xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 202) {
        alert("Successfully sent SMS!");
        console.log('success');
    }
    console.log('')
};
xhr.send();
 })