document.addEventListener('DOMContentLoaded', () => {
    const slidePanel = document.getElementById('slidePanel');
    const overlay = document.getElementById('overlay');
    const closePanel = document.getElementById('closePanel');
  
    // 打開滑動面板
    document.querySelectorAll('.icon-list button').forEach((button) => {
      button.addEventListener('click', () => {
        slidePanel.classList.add('active');
        overlay.classList.add('active'); // 顯示模糊效果
      });
    });
  
    // 關閉滑動面板
    closePanel.addEventListener('click', () => {
      slidePanel.classList.remove('active');
      overlay.classList.remove('active'); // 移除模糊效果
    });
  });
  
  


document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.Ic_tab-button_R');
    const tabContents = document.querySelectorAll('.Ic_tab-content');
  
    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // 移除所有按鈕的 active 狀態
        tabButtons.forEach((btn) => btn.classList.remove('active'));
        // 添加當前按鈕的 active 狀態
        button.classList.add('active');
  
        // 切換內容
        const target = button.dataset.tab;
        tabContents.forEach((content) => {
          content.classList.remove('active');
          if (content.id === target) {
            content.classList.add('active');
          }
        });
      });
    });
  });
  
  


  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.Ic_game-buttons_R button');
    const feedback = document.getElementById('Ic_feedback_R');
  
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const isCorrect = button.getAttribute('data-correct') === 'true';
  
        // 清除所有按鈕的狀態
        buttons.forEach((btn) => btn.classList.remove('correct', 'wrong'));
  
        // 設置按鈕樣式和顯示提示
        if (isCorrect) {
          button.classList.add('correct');
          feedback.textContent = '恭喜！答對了！';
          feedback.style.color = '#28a745'; // 綠色文字
        } else {
          button.classList.add('wrong');
          feedback.textContent = '很遺憾，答錯了！';
          feedback.style.color = '#dc3545'; // 紅色文字
        }
      });
    });
  });
  