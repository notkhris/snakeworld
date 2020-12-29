

window.onload=()=>{
    let app = {
        el:'#app',
        data(){
            return{

            
            subNavIsShow:false,
            currentContent:0,
            snakeImg:1,
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