const { app, BrowserWindow } = require('electron');

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 3840,
    height: 1080,
    frame: false, // 无边框
    resizable: true, // 尺寸可调整
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // 加载指定网页
  win.loadURL('http://10.0.100.140:8888');

  // 打开开发者工具（可选，调试时使用）
  // win.webContents.openDevTools();
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