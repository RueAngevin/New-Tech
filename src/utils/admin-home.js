const adminHome = () => {
    const adminBtn_1 = document.querySelector('.admin__btn-1');
    const adminBtn_2 = document.querySelector('.admin__btn-2');
    const adminBtn_3 = document.querySelector('.admin__btn-3');
    const adminBtn_4 = document.querySelector('.admin__btn-4');
    const adminBtn_5 = document.querySelector('.admin__btn-5');
    const adminField_1 = document.querySelector('.admin__content-1-wrapper');
    const adminField_2 = document.querySelector('.admin__content-2-wrapper');
    const adminField_3 = document.querySelector('.admin__content-3-wrapper');
    const adminField_4 = document.querySelector('.admin__content-4-wrapper');
    const adminField_5 = document.querySelector('.admin__content-5-wrapper');
    
    adminBtn_1.addEventListener('click', () => {
        adminField_1.style.display = 'flex';
        adminField_2.style.display = 'none';
        adminField_3.style.display = 'none';
        adminField_4.style.display = 'none';
        adminField_5.style.display = 'none';
    });

    adminBtn_2.addEventListener('click', () => {
        adminField_1.style.display = 'none';
        adminField_2.style.display = 'flex';
        adminField_3.style.display = 'none';
        adminField_4.style.display = 'none';
        adminField_5.style.display = 'none';
    });

    adminBtn_3.addEventListener('click', () => {
        adminField_1.style.display = 'none';
        adminField_2.style.display = 'none';
        adminField_3.style.display = 'flex';
        adminField_4.style.display = 'none';
        adminField_5.style.display = 'none';
    });

    adminBtn_4.addEventListener('click', () => {
        adminField_1.style.display = 'none';
        adminField_2.style.display = 'none';
        adminField_3.style.display = 'none';
        adminField_4.style.display = 'flex';
        adminField_5.style.display = 'none';
    });

    adminBtn_5.addEventListener('click', () => {
        adminField_1.style.display = 'none';
        adminField_2.style.display = 'none';
        adminField_3.style.display = 'none';
        adminField_4.style.display = 'none';
        adminField_5.style.display = 'flex';
    });
};

export default adminHome;