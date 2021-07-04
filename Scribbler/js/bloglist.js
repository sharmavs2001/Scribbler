function deleteModal() {
    document.getElementById('deleteModal').style.display = "block";
}

function closeDeleteModal() {
    document.getElementById('deleteModal').style.display = "none";
}



function morePost(index) {
    var postTitle = document.getElementsByClassName('post-title')[index].innerHTML;

    localStorage.setItem("pTitle", postTitle);



    var author = document.getElementsByClassName('left')[index].innerHTML;

    localStorage.setItem("pAuthor", author);



    var postBody = document.getElementsByClassName('post-body')[index].innerHTML;

    localStorage.setItem("pBody", postBody);




    location.href = "../html/post.html";


}