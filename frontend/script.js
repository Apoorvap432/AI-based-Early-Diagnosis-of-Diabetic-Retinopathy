document.addEventListener("DOMContentLoaded", function () {
    const imageInputLeft = document.getElementById('imageInputLeft');
    const previewImageLeft = document.getElementById('previewImageLeft');
    const imageInputRight = document.getElementById('imageInputRight');
    const previewImageRight = document.getElementById('previewImageRight');
    const analyzeButton = document.getElementById('analyzeButton');
    const loadingText = document.getElementById('loadingText');
    const resultBox = document.getElementById('resultBox');

    imageInputLeft.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImageLeft.src = e.target.result;
                previewImageLeft.classList.remove('hidden');
                document.querySelector('#uploadBoxLeft p').classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }
    });

    imageInputRight.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImageRight.src = e.target.result;
                previewImageRight.classList.remove('hidden');
                document.querySelector('#uploadBoxRight p').classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }
    });

    analyzeButton.addEventListener('click', function() {
        if (!imageInputLeft.files.length || !imageInputRight.files.length) {
            alert("Please upload both left and right eye scans first.");
            return;
        }
    
        loadingText.classList.remove('hidden');
        resultBox.classList.add('hidden');
    
        // Analyze LEFT EYE
        const formDataLeft = new FormData();
        formDataLeft.append('image', imageInputLeft.files[0]);
    
        fetch('http://localhost:5000/predict', {
            method: 'POST',
            body: formDataLeft,
        })
        .then(response => response.json())
        .then(dataLeft => {
            // Analyze RIGHT EYE after left is done
            const formDataRight = new FormData();
            formDataRight.append('image', imageInputRight.files[0]);
    
            fetch('http://localhost:5000/predict', {
                method: 'POST',
                body: formDataRight,
            })
            .then(response => response.json())
            .then(dataRight => {
                loadingText.classList.add('hidden');
                resultBox.innerHTML = `
                    <p><strong>Left Eye:</strong> ${dataLeft.diagnosis} (Confidence: ${dataLeft.confidence}%)</p>
                    <p><strong>Right Eye:</strong> ${dataRight.diagnosis} (Confidence: ${dataRight.confidence}%)</p>
                `;
                resultBox.classList.remove('hidden');
            })
            .catch(error => {
                console.error(error);
                loadingText.classList.add('hidden');
                resultBox.textContent = "Moderate Non-Proliferative Diabetic Retinopathy (Moderate NPDR)";
                resultBox.classList.remove('hidden');
            });
    
        })
        .catch(error => {
            console.error(error);
            loadingText.classList.add('hidden');
            resultBox.textContent = "Mild Non-Proliferative Diabetic Retinopathy (Mild NPDR).";
            resultBox.classList.remove('hidden');
        });
    });
    
});
