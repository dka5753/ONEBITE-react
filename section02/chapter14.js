//async
// 어떤 함수가 비동기함수로 만들어주는 키워드

async function getData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "winterlood",
            });
        }, 1500);
    })
}

console.log(getData());

//await 
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기함수가 다 처리되기를 기다리는 역할

async function printData() {
    const data = await getData();
    console.log(data);
}