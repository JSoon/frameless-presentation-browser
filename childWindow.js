const { BrowserWindow } = require('electron');

/**
 * 创建一个子浏览器窗口
 * @param {Object} options - 窗口配置选项
 * @param {string} options.url - 要加载的URL
 * @param {string} options.name - 窗口名称
 * @param {number} [options.width] - 窗口宽度
 * @param {number} [options.height] - 窗口高度
 * @param {number} [options.x=0] - 窗口X坐标
 * @param {number} [options.y=0] - 窗口Y坐标
 * @param {boolean} [options.frame=false] - 是否显示窗口边框
 * @param {boolean} [options.resizable=true] - 窗口是否可调整大小
 * @param {boolean} [options.openDevTools=false] - 是否打开开发者工具
 * @returns {BrowserWindow} 创建的浏览器窗口实例
 */
function createChildWindow(options) {
  const { 
    url, 
    name, 
    width, 
    height, 
    x = 0, 
    y = 0, 
    frame = false, 
    resizable = true, 
    openDevTools = false 
  } = options;

  // 创建浏览器窗口
  const win = new BrowserWindow({
    width,
    height,
    x,
    y,
    frame,
    resizable,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // 为窗口设置名称
  win.name = name;

  // 加载指定网页
  win.loadURL(url);

  // 打开开发者工具（如果需要）
  if (openDevTools) {
    win.webContents.openDevTools();
  }

  return win;
}

module.exports = { createChildWindow };
