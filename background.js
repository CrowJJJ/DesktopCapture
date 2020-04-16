
chrome.browserAction.onClicked.addListener(function(tab) { 
    var _stream;  //螢幕串流 
    // Create Element
    var video = document.createElement("video");
    video.name = "ScreenDataUrl";
    video.autoplay = "autoplay";
    video.style = "display: none";
    document.body.appendChild(video);

    // 新增 Video 已載入 Metadata 事件
    video.addEventListener('loadedmetadata', function () {
        // 截取圖片
        var canvas = document.createElement('canvas');
        canvas.width = this.videoWidth;
        canvas.height = this.videoHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);
        var Dataurl = canvas.toDataURL();
        console.log(Dataurl);

        _stream.getTracks()[0].stop();
        download(Dataurl,'Image.png');
        document.querySelector('video').remove();
    }, false);
    chrome.desktopCapture.chooseDesktopMedia(["screen", "window", "tab"], onAccessApproved);
    
    //下載
    function download(dataurl, filename) {
        var link = document.createElement("a");
        link.href = dataurl;
        link.setAttribute("download", filename);
        link.click();
    }
    // 取得使用者螢幕資訊
    function onAccessApproved(desktop_id) {
        navigator.webkitGetUserMedia({
            audio: false,
            video: {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: desktop_id,
                    minWidth: 1280,
                    maxWidth: 1920,
                    minHeight: 720,
                    maxHeight: 1080
                }
            }
        }, gotStream, getUserMediaError);

        function gotStream(stream) {
            _stream = stream;
            document.querySelector('video').srcObject = _stream;
        }

        function getUserMediaError(e) {
            console.log('getUserMediaError: ' + JSON.stringify(e, null, '---'));
        }
    }
});