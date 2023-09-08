document.addEventListener("DOMContentLoaded", function () {
    const contentForm = document.getElementById("contentForm");
    const articleSection = document.getElementById("articleSection");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function () {
        const titleInput = document.getElementById("title");
        const contentTextarea = document.getElementById("content");
        const imageInput = document.getElementById("image");
        const videoInput = document.getElementById("video");

        const contentCard = document.createElement("div");
        contentCard.className = "content-card";

        const titleElement = document.createElement("h3");
        titleElement.textContent = titleInput.value;

        const contentElement = document.createElement("p");
        contentElement.textContent = contentTextarea.value;

        contentCard.appendChild(titleElement);
        contentCard.appendChild(contentElement);

        if (imageInput.files.length > 0) {
            const imagePreview = URL.createObjectURL(imageInput.files[0]);
            const imageElement = document.createElement("img");
            imageElement.src = imagePreview;
            imageElement.alt = "Uploaded Image";
            imageElement.className = "uploaded-content";
            contentCard.appendChild(imageElement);
        }

        if (videoInput.files.length > 0) {
            const videoPreview = URL.createObjectURL(videoInput.files[0]);
            const videoElement = document.createElement("video");
            videoElement.src = videoPreview;
            videoElement.controls = true;
            videoElement.className = "uploaded-content";
            contentCard.appendChild(videoElement);
        }

        articleSection.appendChild(contentCard);

        contentForm.reset();
    });
});
