

window.onload=()=>{
    let app = new Vue({
        el:'#app',
        data:{
            subNavIsShow:false,
            currentContent:0,
            snakeImg:1,
            isOpen:false
        },
        mounted(){
            document.querySelectorAll('.content').forEach((cnt)=>{
                cnt.addEventListener('click',()=>{
                    this.subNavIsShow = false
                })
            })
            document.querySelector('#app').style.display = 'block'
        }
    })
}