function addComment() {
    let commentInput = document.getElementById("commentInput");
    let commentText = commentInput.value.trim();

    if (commentText === "") {
        alert("Please enter a comment!");
        return;
    }

    // Create new comment element
    let newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.textContent = commentText;

    // Add the new comment on top
    let commentSection = document.getElementById("commentSection");
    commentSection.insertBefore(newComment, commentSection.firstChild);

    // Clear the input field after submitting
    commentInput.value = "";
}
