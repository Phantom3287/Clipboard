  setInterval(function () { 
    fetch('http://jsonblob.com/api/jsonBlob/1063969434733133824')
      .then(response => response.json())
      .then(data => {
        let text = data.text;
        if (text !== prevText) {
          let prevText = text;
          navigator.clipboard.writeText(text);
        }
    });
}, 1000);