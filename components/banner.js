

class Banner {
    constructor () {
      this.$bannerContainer= document.createElement('div')
      this.$bannerContainer.setAttribute(
          "class",
          "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8  " 
      )
      this.$divImg= document.createElement('div')
      this.$divImg.setAttribute('class', 'flex h-96  ')
      this.$bannerImg=document.createElement('img')
        this.$bannerImg.setAttribute("style", "background-image: url(/photos/mohammad-metri-1oKxSKSOowE-unsplash.jpg)")        
        this.$bannerImg.setAttribute('class',"h-full w-full  bg-cover bg-no-repeat bg-center  ")
    
    }
    render (container) {
        this.$divImg.appendChild(this.$bannerImg)
        this.$bannerContainer.appendChild(this.$divImg)
        container.appendChild(this.$bannerContainer)
    }
}

export default Banner;