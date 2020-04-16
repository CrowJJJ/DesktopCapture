## 螢幕截圖功能
![N|Solid](https://img.icons8.com/dusk/256/000000/chrome.png)

### 架構說明 

![N|Solid](https://developer.chrome.com/static/images/devtools-extension.png)

##### 專案設定 manifest.json 
  - 每個Chrome擴充功能必須要有  
  - JSON格式的清單文件
  - 提供一切擴充功能的資訊
  
##### 背景腳本 background.js
  - 隨著瀏覽器開啓而開始，關閉而結束
  - 會獨立有一個 background.html
  
##### 內容腳本 content_script.js 
  - 主要用來與頁面DOM連動
  - 部分ChromeAPI無法使用
  - 可以透過DOM來改變頁面CSS、JavaScript
  
### Chrome商店上架 
  [Chrome 線上應用程式商店後台](https://chrome.google.com/webstore/developer/dashboard?pli=1&authuser=1)

### 參考資料 

|  | 連結 |
| ------ | ------ |
| Chrome Extension 開發與實作 IT邦 | https://ithelp.ithome.com.tw/articles/10186017 |
| Chrome APIs | https://developer.chrome.com/extensions/api_index#experimental |
