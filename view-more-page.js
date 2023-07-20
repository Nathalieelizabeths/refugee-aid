document.addEventListener("DOMContentLoaded", function() {
    // Get the organization details from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const organizationName = urlParams.get("name");
    const organizationDescription = urlParams.get("description");

    // Populate the view-more-page.html template with the organization details
    const organizationNameElement = document.querySelector(".organization-name");
    const organizationDescriptionElement = document.querySelector(".organization-description");

    organizationNameElement.textContent = organizationName;
    organizationDescriptionElement.textContent = organizationDescription;
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the organization details from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const organizationName = urlParams.get("name");
    const organizationDescription = urlParams.get("description");

    // Populate the view-more-page.html template with the organization details
    const organizationNameElement = document.querySelector(".organization-name");
    const organizationDescriptionElement = document.querySelector(".organization-description");

    organizationNameElement.textContent = organizationName;
    organizationDescriptionElement.textContent = organizationDescription;
});
