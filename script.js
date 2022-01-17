const headerTags = document.querySelectorAll("h1")

const runRandom = tag => {
  const originalContent = tag.dataset.original 
  let newContent = ""
  let num = 0
  const randomList = "abcdefghijklmnopqrstuvwxyz._$@!$17349".split("")
  
  const addInterval = setInterval(() => {
    num = num + 1
    newContent = originalContent.substring(0, num)
    
    if (originalContent == tag.innerHTML) {
      clearInterval(addInterval)
      clearInterval(randomInterval)
    }
    
  }, 200)
  
  const randomInterval = setInterval(() => {
    tag.innerHTML = newContent 
    
    for (let i = newContent.length; i < originalContent.length; i = i + 1) {
      tag.innerHTML = tag.innerHTML + randomList[Math.floor(Math.random() * randomList.length)]
    }
  }, 75)
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.5) {
      runRandom(entry.target)
    }
  })
}, {
  threshold: [0, 0.5, 1]
})

headerTags.forEach(tag => {
  tag.dataset.original = tag.innerHTML
	observer.observe(tag)
})
