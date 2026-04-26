function postAnnouncement() {
    const input = document.getElementById("messageInput");
    const output = document.getElementById("outputBox");

    if (input.value.trim() === "") return;

    // Create new post
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerText = input.value;

    // Add to top (latest first)
    output.prepend(newPost);

    // Clear input
    input.value = "";
}
