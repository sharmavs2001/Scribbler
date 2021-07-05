// getting post title, writers nam and post content from the bloglist file
var title = localStorage.getItem("pTitle");
var authorName = localStorage.getItem("pAuthor");
var postBody = localStorage.getItem("pBody");

document.getElementById('titleOfPost').innerHTML = title;
document.getElementById('Author').innerHTML = authorName;
document.getElementById('post-body').innerHTML = postBody;


// for toggle edit and sace buttons
var flag = 0;

function toggleEditSave() {

    var editSave = document.getElementsByClassName('editSave')[0];

    if (flag == 0) {

        document.getElementById('titleOfPost')
        editSave.innerHTML = '<button id = "save-btn" onclick="toggleEditSave()"> Save <i class = "fa fa-save" style = "font-size: 12px;" > </i></button>';
        flag = 1;

        makeEditAble();


    } else {
        editSave.innerHTML = ' <button id="edit-btn" onclick="toggleEditSave()">Edit <i class="fas fa-edit" style="font-size: 12px;"></i></button>';
        flag = 0;
        saveChanges();
    }
}


/* for making the tile and post content editable*/
function makeEditAble() {

    document.getElementById('titleOfPost').style.display = "none";
    document.getElementById('post-body').style.display = "none";


    var titlearea = document.getElementById('titleArea');
    var textarea = document.getElementById('textArea');


    titlearea.style.display = "block";
    textarea.style.display = "block";

    titlearea.innerHTML = document.getElementById('titleOfPost').innerHTML;
    textarea.innerHTML = document.getElementById('post-body').innerHTML;


}


/*save the changes after making changes*/
function saveChanges() {


    document.getElementById('titleOfPost').style.display = "block";
    document.getElementById('post-body').style.display = "block";


    var titlearea = document.getElementById('titleArea');
    var textarea = document.getElementById('textArea');

    titlearea.style.display = "none";
    textarea.style.display = "none";

    document.getElementById('titleOfPost').innerHTML = titlearea.innerHTML;
    document.getElementById('post-body').innerHTML = textarea.innerHTML;


}


/* Like Counter */

var like = document.getElementById('like-btn');
var count = 1;
like.onclick = function() {
    if (count == 1) {
        like.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked!';
        document.getElementById('like-text').innerHTML = count + " person likes this!";
    } else if (count > 1) {
        document.getElementById('like-text').innerHTML = count + " people have liked this!";
    }
    count++;
}



/* Comment maker- if the comment text is empty the comment wouldn't be added */
var commentBtn = document.getElementById('comment-btn');
commentBtn.onclick = function() {
    var comment = document.getElementById('comment-box');

    var commentSection = document.getElementById('comment-section');
    if (comment.value)
        commentSection.innerHTML += '<div class="commented"><p>' + comment.value + '</p></div>';

    comment.value = "";

}