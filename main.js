const { app } = require('electron');
const { createChildWindow } = require('./childWindow');

function createWindow() {
  // 成都达海数字调度大屏
  createChildWindow({
    name: 'DaHaiDiaoDu',
    url: 'http://10.0.100.140:8888',
    width: 3840,
    height: 1080,
    x: 0,
    y: 0
  });
}

// Electron初始化完成后创建窗口
app.whenReady().then(() => {
  createWindow();

  // macOS下，当所有窗口关闭时，应用不会自动退出
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 关闭所有窗口时退出应用（Windows和Linux）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});