// 上传
/**
 * 
 * @param {Object} options {
 *  
 * }
 * @returns 
 */
export default function upload(options) {
  if (typeof XMLHttpRequest === "undefined") return;

  const xhr = new XMLHttpRequest();
  const url = "https://blackjun.cn/wander/fileUtils";

  xhr.setResponseHeader("Content-Type", "multipart/form-data");
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      console.log(xhr.responseText); //接收数据
    }
  };

  

  xhr.send(null);
}
