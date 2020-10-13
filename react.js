//모듈을 추출합니다
const express = require('express');

//서버를 생성합니다
const app = express();

//request 이벤트 리스너를 설정합니다.
app.get('*',(request,Response)=>{
    Response.status(404);
    Response.set('methodA','ABCDE');
    Response.set({
        'methodB1':'FGHIJ',
        'methodB2':'KLMNO'
    });
    Response.send('내 마음대로 본문을 입력합니다');
});

//서버를 실행합니다.
app.listen(52273,()=>{
    console.log('Server running at http://127.0.01:52273');
});