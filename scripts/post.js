var likeCount = 0;

function saveLike() {
  var likeButton = document.getElementById("likeButton");
  var likeCountElement = document.getElementById("likeCount");

  if (likeButton.classList.contains("fades")) {
    // Remove fade and change text to 'Liked'
    likeButton.classList.remove("fades");
    likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>&nbsp; Liked';
    likeCount++;
    $("#likeCount").show();
  } else {
    // Add fade and change text to 'Like'
    likeButton.classList.add("fades");
    likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>&nbsp; Like';
  }

  // Update like count
  likeCountElement.textContent =
    likeCount +
    (likeCount === 1 ? " people likes this!" : " people likes this!");
}
function postComment() {
  $("#commentList").show();
  var commentInput = document.getElementById("commentInput");
  var commentList = document.getElementById("commentList");

  var commentText = commentInput.value.trim();

  if (commentText !== "") {
    var p = document.createElement("p");
    p.className = "comment-text"; // Add the class "comment-text"
    p.appendChild(document.createTextNode(commentText));
    commentList.prepend(p);

    // Clear the input after posting comment
    commentInput.value = "";
  } else {
    alert("Please type a comment before posting.");
  }
}

function editPost() {
  $(".post-heading, .post-description").addClass("edit-mode");
  $(".post-heading, .post-description").prop("contenteditable", true);
  $(".edit-btn").hide();
  $(".save-btn").show();
}

function savePost() {
  $(".post-heading, .post-description").removeClass("edit-mode");
  $(".post-heading, .post-description").prop("contenteditable", false);
  $(".edit-btn").show();
  $(".update").show();
  $(".save-btn").hide();
}
