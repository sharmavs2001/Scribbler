var title = localStorage.getItem("pTitle");
var authorName = localStorage.getItem("pAuthor");
var postBody = localStorage.getItem("pBody");

document.getElementById('titleOfPost').innerHTML = title;
document.getElementById('Author').innerHTML = authorName;
document.getElementById('post-body').innerHTML = postBody;