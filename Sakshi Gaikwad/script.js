
let isBulbOn = false;
let brightness = 100; 

const bulb = document.getElementById("led-bulb");
const toggleBtn = document.getElementById("toggleBtn");
const brightnessSlider = document.getElementById("brightnessSlider");


function toggleBulb() {
    isBulbOn = !isBulbOn;
    if (isBulbOn) {
        bulb.classList.add("on");
        toggleBtn.textContent = "Turn Off";
    } else {
        bulb.classList.remove("on");
        toggleBtn.textContent = "Turn On";
        brightness = 0; 
        brightnessSlider.value = brightness;
    }
    adjustBrightness(brightness);
}


function adjustBrightness(value) {
    brightness = value;
    if (isBulbOn) {
        bulb.style.filter = `brightness(${brightness}%)`;
    }
}


        let isACOn = false;  
        let temperature = 24; 

        
        function changeTemperature(value) {
            if (isACOn) {
                temperature += value;
                document.getElementById('acScreen').textContent = `Temperature: ${temperature}°C`;
            }
        }

        
        function toggleAC() {
            isACOn = !isACOn;

            const statusText = isACOn ? 'AC is ON' : 'AC is OFF';
            const buttonText = isACOn ? 'ON' : 'OFF';
            const buttonColor = isACOn ? '#4CAF50' : '#f44336';

           
            document.getElementById('acStatus').textContent = statusText;

           
            const offButton = document.querySelector('.ac-buttons button.off');
            offButton.textContent = buttonText;
            offButton.style.backgroundColor = buttonColor;

            
            if (!isACOn) {
                document.getElementById('acScreen').textContent = `Temperature: OFF`;
            }
        }
    



    
    let tvOn = false;

    
    function toggleTV() {
        tvOn = !tvOn; 

        const screen = document.getElementById("screen");
        const video = document.getElementById("video");
        const status = document.getElementById("status");

        if (tvOn) {
            screen.style.display = "block"; 
            video.play();  
            status.textContent = "TV is ON. Playing video..."; 
        } else {
            screen.style.display = "none"; 
            video.pause(); 
            video.currentTime = 0; 
            status.textContent = "TV is OFF"; 
        }
    }






    let rotationSpeed = 1; 
    let image = document.getElementById('image');
    let isRotating = false;

    function startRotation() {
        if (!isRotating) {
            isRotating = true;
            image.style.animation = `rotate ${getRotationDuration()} infinite linear`;
        }
    }

    
    function stopRotation() {
        isRotating = false;
        image.style.animation = ''; 
    }

    
    function setSpeed(speed) {
        rotationSpeed = speed; 
        if (isRotating) {
          
            image.style.animation = `rotate ${getRotationDuration()} infinite linear`;
        }
    }

    
    function getRotationDuration() {
        switch(rotationSpeed) {
            case 1:
                return '0.6s'; 
            case 2:
                return '0.4s';
            case 3:
                return '0.3s'; 
            default:
                return '0.6s'; 
        }
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);