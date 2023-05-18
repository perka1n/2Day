let random_button = document.querySelector(".random_button")
let clear_button = document.querySelector(".clear_button")
let display = document.querySelector(".display")
let text_array = ['Shadow Fiend', 'Phantom Assasin', 'AntiMage', 'Brew Master', 'Templar Assasin', 'Nyx Assasin', 'Lifestealer', 'Muerta', 'Primal Beast', 
'Snapfire', 'Windtanger', 'Tiny', 'Beast Master', 'Pudge', 'Treant Protector', 'Oracle', 'Dazzle', 'Zeus', 'Legion Comannder', 'Jakiro']
let style_array = ["color1", "color2", "color3", "color4", "color5", "color6", ]

random_button.addEventListener("click", () => {
    display.innerHTML = text_array[Math.floor(Math.random() * (text_array.length))]
    display.className = style_array[Math.floor(Math.random() * style_array.length)]
})

clear_button.addEventListener("click", () => {
    display.innerHTML = ""
    display.className = ""
})