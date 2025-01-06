document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.Ic_tab-button_R');
    const contents = document.querySelectorAll('.Ic_tab-content');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // 移除所有按鈕的 active 狀態
        buttons.forEach(btn => btn.classList.remove('active'));
  
        // 添加當前按鈕的 active 狀態
        button.classList.add('active');
  
        // 隱藏所有內容
        contents.forEach(content => content.classList.remove('active'));
  
        // 顯示對應內容
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  });
  