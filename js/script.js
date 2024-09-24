 // إضافة كلاس "fade-out" بعد 4 ثوانٍ لجعل الانيميشن يظهر بالتدريج
 setTimeout(function() {
    document.querySelector('.splash-screen').classList.add('fade-out');
}, 4000); // 4 ثوانٍ قبل بدء التلاشي

// بعد 5 ثوانٍ، الانتقال إلى الصفحة الرئيسية
setTimeout(function() {
    window.location.href = "main.html"; // ضع رابط الصفحة الرئيسية هنا
}, 5000); // 5000 ملي ثانية = 5 ثوانٍ