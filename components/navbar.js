import navTittle from "./navTittle.js"
 class Navbar {
        constructor(){
            this.$navcontainer= document.createElement('nav')
            this.$navcontainer.setAttribute(
                "class",
                "bg-gray-800 "

            )
            this.$navEl=document.createElement('div')  
            this.$navEl.setAttribute(
                "class",
                "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
            )
            this.$navTittle=new navTittle()

            this.$relavtive=document.createElement('div')
            this.$relavtive.setAttribute('class', 'relative flex items-center justify-between h-17')
        }
 
        
        render(container){
        
            this.$relavtive.appendChild(this.$navTittle.render())
            this.$navEl.appendChild(this.$relavtive)
            this.$navcontainer.appendChild(this.$navEl)
            container.appendChild(this.$navcontainer)   
        }
}
export default Navbar

