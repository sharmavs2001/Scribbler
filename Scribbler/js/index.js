var createPostModal = document.getElementById('createPostModal');
var createPost = document.getElementById('createPostBtn');

/*open create post modal*/
createPost.onclick = function() { createPostModal.style.display = "block"; }


/* close create post modal*/
var createPostCross = document.getElementsByClassName('close')[2];
createPostCross.onclick = function() { createPostModal.style.display = "none"; }

// got to bloglist.html pages
var allPosts = document.getElementById('allPostsBtn');
allPosts.onclick = function() { location.href = "html/bloglist.html"; }