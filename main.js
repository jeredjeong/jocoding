
const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');

const getNumberColor = (number) => {
    if (number <= 10) return '#f44336'; // Red
    if (number <= 20) return '#4caf50'; // Green
    if (number <= 30) return '#2196f3'; // Blue
    if (number <= 40) return '#ff9800'; // Orange
    return '#9c27b0'; // Purple
};

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const numberEl = document.createElement('div');
            numberEl.classList.add('number');
            numberEl.textContent = number;
            numberEl.style.backgroundColor = getNumberColor(number);
            numberEl.style.transform = 'scale(0)';
            numberEl.style.animation = 'popIn 0.3s ease forwards';
            numbersContainer.appendChild(numberEl);
        }, index * 100);
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);
