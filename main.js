

window.onload=()=>{
    let app = {
        el:'#app',
        data(){
            return{

                snakeImgs: [
                    'https://i.loli.net/2020/12/31/cqDxzoTMuwkKJ7s.png',
                    'https://i.loli.net/2020/12/31/tTHb9XhPDfugJqL.png',
                    'https://i.loli.net/2020/12/31/Bs6gy9XJmKaR4vA.png'
                
                ],
            subNavIsShow:false,
            currentContent:0,
            snakeImg:0,
            isOpen:false
            }
        },
        mounted(){
            document.querySelectorAll('.content').forEach((cnt)=>{
                cnt.addEventListener('click',()=>{
                    this.subNavIsShow = false
                })
            })
            document.querySelector('#app').style.display = 'block'
        }
    }

    Vue.createApp(app).mount('#app')
}