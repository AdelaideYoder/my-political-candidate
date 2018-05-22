var articleRef = document.querySelector(".candidate")

let paragraphElement = document.createElement("p")
let paragraphTextNode = document.createTextNode("Can do")
paragraphElement.appendChild(paragraphTextNode)

articleRef.appendChild(paragraphElement)

const congressionalDistAttr = document.createAttribute("congressional-district")

congressionalDistAttr.value = "5"

articleRef.setAttributeNode(congressionalDistAttr)