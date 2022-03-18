 
class navTittle  {
    constructor(){
        this.$titlecontainer= document.createElement('nav')
        this.$titlecontainer.setAttribute(
            "class",
            " flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        )
        this.$logo= document.createElement('div')
        this.$logo.setAttribute('class',
            "flex-shrink-0 flex items-center"
        )
        this.$img= document.createElement('img')
        this.$img.setAttribute("class",
            "block h-20 w-auto bg-cover",
        )
        this.$img.innerText="abvc"
        this.$img.setAttribute("src","https://iconape.com/wp-content/files/el/292808/svg/sound-seeklogo.com.svg")
        this.$navItem= document.createElement('div')
        this.$navItem.setAttribute('class',' hidden sm:block sm:ml-6')

        this.$box= document.createElement('div')
        this.$box.setAttribute('class',' flex space-x-4')

        this.$SoundMay= document.createElement('a')
        this.$SoundMay.setAttribute('class','italic text-xl  text-white px-5 py-6 font-medium')
        this.$SoundMay.innerText= 'SoundMay'

        this.$SignInBox= document.createElement('div')
        this.$SignInBox.setAttribute('class','absolute right-0 top-3 flex')
        this.$buttonSignIn=document.createElement('button')
        this.$buttonSignIn.setAttribute('class',
        'bg-gray-800 bg-yellow-500 hover:bg-blue-400 text-white font-bold py-2 px-4 hover:border-blue-500 rounded'
        
        )
        this.$buttonSignIn.type ="button"
        this.$buttonSignIn.innerText='Sign In'  


        this.$CreateBox= document.createElement('div')
        this.$CreateBox.setAttribute('class','absolute top-3 right-20 ')
        
        this.$buttonCreate= document.createElement('button')
        this.$buttonCreate.setAttribute('class',
        'bg-gray-800 bg-yellow-500 hover:bg-blue-400 text-white font-bold py-2 px-4 hover:border-blue-500 rounded'
        
        )
        this.$buttonCreate.type ="button"
        this.$buttonCreate.innerText='Create Account'  
    }

    
    render(){
        this.$titlecontainer.appendChild(this.$logo)
        this.$logo.appendChild(this.$img)
        this.$box.appendChild(this.$SoundMay)
        this.$navItem.appendChild(this.$box)
        this.$SignInBox.appendChild(this.$buttonSignIn)
        this.$CreateBox.appendChild(this.$buttonCreate)
        this.$titlecontainer.appendChild(this.$navItem)
        this.$titlecontainer.appendChild(this.$SignInBox)
        this.$titlecontainer.appendChild(this.$CreateBox)
         
        return this.$titlecontainer;
       
    }
}

export default navTittle