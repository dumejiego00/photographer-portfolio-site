
# Portfolio Website

This is a responsive one-page portfolio website template, designed to showcase creative work, such as photography, design, or other creative services. The website includes sections for a biography, portfolio gallery, and a contact form.

## Demo

You can view a live demo of the portfolio website by visiting the deployed version on Netlify.[Click here](https://photographer-portfolio-site.netlify.app/)

## About the Project

This is a one-page, responsive portfolio website that highlights a variety of creative works. It includes the following sections:

- **Biography**: A section for the individual or business to describe their background or mission.
- **Gallery**: A photo gallery to showcase different categories of work (e.g., Portrait, Views, Food, Modeling).
- **Contact Form**: A form that users can fill out to send a message (with Netlify integration for form handling).

This project was developed as part of a personal learning experience, and now it is being shared publicly to help others who want to create a similar portfolio website.

## Key Features

- **Responsive Design**: The site adapts to various screen sizes, from desktop to mobile.
- **Lightbox Gallery**: The gallery uses the Lightbox plugin to allow users to view images in a modal popup.
- **Smooth Scroll to Top**: A button that appears when scrolling down, allowing users to smoothly scroll back to the top.
- **Navigation Menu**: A responsive navigation menu that works on both desktop and mobile devices.
- **Customizable Sections**: Easily replace the biography and gallery content with your own creative work.
- **Netlify Form Handling**: The contact form is set up for easy deployment using Netlify forms.
- **Preloading Images**: Images for the homepage and gallery are preloaded to optimize performance.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript** (for interactivity)
- **Lightbox Plugin** (for image gallery)
- **jQuery** (for certain interactive elements)
- **Google Fonts** (Prata and Roboto Serif)
- **Netlify Forms** (for contact form handling)

## Setup Instructions

### Prerequisites:

- A modern browser (Chrome, Firefox, Safari, etc.)
- A text editor (e.g., VS Code, Sublime Text) for any customizations or development.

### Steps to Run Locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/photographer-portfolio-site.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd photographer-portfolio-site
   ```

3. **Open `index.html` in your browser**:
   - Double-click on `index.html` or open it in any browser.

4. **(Optional)** Install a local server for live testing:
   - If you're making changes to the JavaScript or CSS and want live-reload functionality, install a simple server (e.g., using the Live Server extension in VS Code).
   - Open the folder in VS Code and click `Go Live`.

### Contact Form Configuration with Netlify

- The contact form uses **Netlify Forms** for submission. To get the form working, deploy the site to **Netlify**.

Steps to configure the form on Netlify:

1. Sign up for a [Netlify account](https://www.netlify.com/).
2. Link your GitHub repository to Netlify.
3. Ensure that the form tag includes the `netlify` attribute (e.g., `data-netlify="true"` or `netlify`).
4. Set up a success page (e.g., `/confirm.html`) or a redirect after form submission.
5. Configure your project to handle form submissions directly from the Netlify dashboard.

Netlify documentation for forms can be found [here](https://www.netlify.com/docs/form-handling/).
