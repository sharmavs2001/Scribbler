var createPostModal = document.getElementById('createPostModal');
var createPost = document.getElementById('createPostBtn');

createPost.onclick = function() { createPostModal.style.display = "block"; }



var createPostCross = document.getElementsByClassName('close')[2];
createPostCross.onclick = function() { createPostModal.style.display = "none"; }


var allPosts = document.getElementById('allPostsBtn');
allPosts.onclick = function() { location.href = "html/bloglist.html"; }