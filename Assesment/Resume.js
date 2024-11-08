
function generateResume() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const workExperience = document.getElementById("workExperience").value;
    const education = document.getElementById("education").value;
    const photoInput = document.getElementById("photo").files[0];
  
    if (!name || !email || !phone || !linkedin || !github || !workExperience || !education || !photoInput) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Hide the form
    document.getElementById("resumeForm").style.display = "none";
  
    // Create the resume output HTML
    const resumeOutput = document.getElementById("resumeOutput");
    const resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = `
      <h2>${name}</h2>
      <img id="photoPreview" alt="User Photo">
      <div class="resume-section">
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
      </div>
      <div class="resume-section">
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
      </div>
      <div class="resume-section">
        <h3>Education</h3>
        <p>${education}</p>
      </div>
      <div id="resumeOutput" class="resume-output">
            <div id="resumePreview">
                <button onclick="downloadResume()">Download as PDF</button>
            </div>
        </div>
    `;
  
    // Display the user's uploaded photo
    const photoPreview = document.getElementById("photoPreview");
    const reader = new FileReader();
    reader.onload = function(e) {
      photoPreview.src = e.target.result;
    };
    reader.readAsDataURL(photoInput);
  
    // Show the resume output
    resumeOutput.style.display = "block";
  }
  
  function downloadResume() {
    const resumeElement = document.getElementById("resumePreview");
  
    // Use html2pdf library to download the resume as a PDF
    html2pdf(resumeElement, {
      margin:       0.5,
      filename:     'Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      
    });
  }
  