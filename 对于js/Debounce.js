//高阶函数
function debounce(fn,dur=1000){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this.arguments) 
        },dur)
    }
}
//节点选定
const test = document.getElementById('txt')
let text = []
//添加事件
test.addEventListener('keyup',debounce(function(){
        //创造节点
        const li = document.createElement('li')
        const ul = document.querySelector('.list')
        //判断是否为空
        if(test.value!==''){
            li.innerHTML= test.value
            //数组方法
            text.unshift(li)
            if(text.length<10){
                text.map((index)=>{
                    return ul.appendChild(index)
                })
            }else{
                //移除节点
                ul.removeChild(ul.lastChild)
                delete text[9]
                text.map((index)=>{
                    return ul.appendChild(index)
                })
            }
        }
        
}))
//如何优化，第一不考虑框架，那可以弄对象来map
//考虑框架可以用map数组长度 return 虚拟DOM