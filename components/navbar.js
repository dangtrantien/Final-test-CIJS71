
 export default class Navbar {
        constructor(){
            this.$navcontainer = document.createElement('ul');
            this.$navcontainer.setAttribute(
                "class",
                "flex justify-between "
            )
            this.$nav=document.createElement('li');
            this.$nav.setAttribute(
                "class",
                "mr-3 list-none "
            )
            this.$title=document.createElement('a')
            this.$title.setAttribute(
                "class",
                " inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
            )
            this.$title.innerText='SoundMay'

            this.$blog = document.createElement('a')
            this.$blog.setAttribute(
                "class",
                "w-full block flex-grow lg:flex lg:items-center lg:w-auto cursor: pointer"
            )
            this.$blog.innerText='Blog'
           this.$about = document.createElement('a')
           this.$about.setAttribute(
               'class',
               "inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
           )
   
        }

        render(container){
            this.$nav.appendChild(this.$title)
            this.$nav.appendChild(this.$blog)
            this.$nav.appendChild(this.$about)
            this.$navcontainer.appendChild(this.$nav)
            this.$navcontainer.appendChild(this.$nav)
            container.appendChild(this.$navcontainer)
           
            
        }
}

