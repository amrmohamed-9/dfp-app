import React, { useState, useEffect } from 'react';
import './css/ScrollToTop.css'; // تأكد من إنشاء ملف CSS لتنسيق الزر

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // إزالة الlistener عند إزالة الكومبوننت
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // انتقال سلس
    });
  };

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑ {/* يمكنك تغيير هذا الرمز أو استبداله بصورة */}
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
