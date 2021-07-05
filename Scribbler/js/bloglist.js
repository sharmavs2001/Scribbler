/*close the delete modal*/
function deleteModal() {
    document.getElementById('deleteModal').style.display = "block";
}

/*Open the delete modal*/
function closeDeleteModal() {
    document.getElementById('deleteModal').style.display = "none";
}


/*for opening the post.html file and sending the post content to it*/
function morePost(index) {
    var postTitle = document.getElementsByClassName('post-title')[index].innerHTML;
    localStorage.setItem("pTitle", postTitle);

    var author = document.getElementsByClassName('left')[index].innerHTML;
    localStorage.setItem("pAuthor", author);

    var postBody = document.getElementsByClassName('post-body')[index].innerHTML;
    localStorage.setItem("pBody", postBody);

    location.href = "../html/post.html";

}