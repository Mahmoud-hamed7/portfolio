document.addEventListener('DOMContentLoaded', function() {

    
    const validationRules = {
        fName: { regex: /^[a-zA-Z\s\-]{2,50}$/, message: 'First Name must be from 2 to 50 char.', required: true },
        lName: { regex: /^[a-zA-Z\s\-]{2,50}$/, message: 'Last Name must be from 2 to 50 char.', required: true },
        phone: { regex: /^01[0-2|5]\d{8}$/, message: 'You must put an Egyptian number (011, 010, 015, 012).', required: true },
        email: { regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: 'You must do like (user@domain.com).', required: true }
    };

    function validateField(inputElement, fieldName) {
        const rule = validationRules[fieldName];
        const value = inputElement.value.trim();
        const feedbackElement = document.querySelector(`.${fieldName}-feedback`);
        if (!rule) return;

        if (rule.required && value.length === 0) {
            inputElement.classList.add('is-invalid'); inputElement.classList.remove('is-valid');
            if(feedbackElement) feedbackElement.textContent = 'this is required';
            return false;
        }

        if (rule.regex.test(value)) {
            inputElement.classList.add('is-valid'); inputElement.classList.remove('is-invalid');
            if(feedbackElement) feedbackElement.textContent = '';
            return true;
        } else {
            inputElement.classList.add('is-invalid'); inputElement.classList.remove('is-valid');
            if(feedbackElement) feedbackElement.textContent = rule.message;
            return false;
        }
    }

    const form = document.querySelector('.myForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let allValid = true;
            const fields = ['fName', 'lName', 'phone', 'email'];
            fields.forEach(fieldName => {
                const inputElement = document.querySelector(`.${fieldName}`);
                if (inputElement && !validateField(inputElement, fieldName)) {
                    allValid = false;
                }
            });
            if (allValid) { console.log("Form submitted successfully!"); } 
            else { console.log("Form validation failed. Please correct the errors."); }
        });
    }

// add but
    const membershipContainer = document.getElementById('membershipContainer');
    const addNewBtn = document.getElementById('addNewMembershipBtn');

    if (membershipContainer && addNewBtn) {
        const baseTemplate = membershipContainer.querySelector('.membership-item').outerHTML;

        function addNewMembership() {
            const newMembershipItem = document.createElement('div');
            newMembershipItem.innerHTML = baseTemplate;
            const item = newMembershipItem.firstElementChild;
            item.querySelectorAll('input').forEach(input => {
                input.value = '';
            });
            membershipContainer.appendChild(item);
        }

        function deleteMembership(deleteButton) {
            const itemToDelete = deleteButton.closest('.membership-item');
            if (itemToDelete) { itemToDelete.remove(); }
        }

        addNewBtn.addEventListener('click', addNewMembership);
        membershipContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                deleteMembership(e.target);
            }
        });
    }

    // upload, remove

    
    const uploadBtnProfile = document.getElementById('uploadNewBtnProfile');
    const fileInputProfile = document.getElementById('fileInputProfile');
    const fileInfoProfile = document.getElementById('fileInfoProfile');
    const fileIconProfile = document.getElementById('fileIconProfile');
    const removeBtnProfile = document.getElementById('removeBtnProfile');

    if (uploadBtnProfile && removeBtnProfile) {
        uploadBtnProfile.addEventListener('click', () => { fileInputProfile.click(); });
        
        fileInputProfile.addEventListener('change', () => {
            const files = fileInputProfile.files;
            if (files.length > 0) {
                const selectedFile = files[0];
                fileInfoProfile.textContent = `File selected: ${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`;
                fileIconProfile.classList.add('text-success'); fileIconProfile.classList.remove('text-muted');
            } else {
                fileInfoProfile.textContent = 'Your image should Below 4 MB. Accepted format (jpg,png,svg)';
                fileIconProfile.classList.add('text-muted'); fileIconProfile.classList.remove('text-success');
            }
        });

        removeBtnProfile.addEventListener('click', () => {
            fileInputProfile.value = ''; 
            fileInfoProfile.textContent = 'Your image should Below 4 MB. Accepted format (jpg,png,svg)';
            fileIconProfile.classList.add('text-muted'); fileIconProfile.classList.remove('text-success');
            console.log("Profile image removed successfully.");
        });
    }


    // upload remove,  بس لل education 
    const uploadBtnEdu = document.getElementById('uploadNewBtnEdu1'); 
    const fileInputEdu = document.getElementById('fileInputEdu1');   
    const fileInfoEdu = document.getElementById('fileInfoEdu1');
    const fileIconEdu = document.getElementById('fileIconEdu1');
    const removeBtnEdu = document.getElementById('removeBtnEdu1');

    if (uploadBtnEdu && fileInputEdu) {
        uploadBtnEdu.addEventListener('click', () => { fileInputEdu.click(); });

        fileInputEdu.addEventListener('change', () => {
            const files = fileInputEdu.files;
            if (files.length > 0) {
                const selectedFile = files[0];
                fileInfoEdu.textContent = `File selected: ${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`;
                fileIconEdu.classList.add('text-success'); fileIconEdu.classList.remove('text-muted');
            } else {
                fileInfoEdu.textContent = 'Your image should Below 4 MB, Accepted format jpg,Png,Svg';
                fileIconEdu.classList.add('text-muted'); fileIconEdu.classList.remove('text-success');
            }
        });

        removeBtnEdu.addEventListener('click', () => {
            fileInputEdu.value = ''; 
            fileInfoEdu.textContent = 'Your image should Below 4 MB, Accepted format jpg,Png,Svg';
            fileIconEdu.classList.add('text-muted'); fileIconEdu.classList.remove('text-success');
        });
    }
});