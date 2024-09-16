document.addEventListener('DOMContentLoaded', function() {
    // 로그인 기능
    const loginForm = document.getElementById('loginForm');
    const loginSection = document.getElementById('loginSection');
    const chartSection = document.getElementById('chartSection');
    const loginError = document.getElementById('loginError');

    // 미리 설정한 유저명과 비밀번호
    const validUsername = 'admin'; // 원하는 아이디로 변경
    const validPassword = 'password123'; // 원하는 비밀번호로 변경

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        // 아이디와 비밀번호 확인
        if (enteredUsername === validUsername && enteredPassword === validPassword) {
            loginSection.style.display = 'none';
            chartSection.style.display = 'block';
            displayChart();
        } else {
            loginError.textContent = '아이디 또는 비밀번호가 잘못되었습니다.';
        }
    });

    // 차트 표시 함수
    function displayChart() {
        const ctx = document.getElementById('chartContainer').getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar', // 차트 유형 (막대 차트)
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Monthly Sales',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});