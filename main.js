const elContent = document.querySelector(".content");
document.addEventListener("keydown", (evt)=> {
    elContent.innerHTML = `
    <a class="table-link" href="https://www.toptal.com/developers/keycode/table-of-all-keycodes">Table</a>
    <div class="content__main">${evt.which}</div>
    <ul class="list">
        <li class="card">
        <div class="card__header">event.key</div>
        <div class="card__main">${evt.key == " " ? "Space" : evt.key}</div>
        <div class="card__description">The value of the key pressed. Accounts for modifiers keys that return CAPS and alternate chars.</div>
        </li>

        <li class="card">
            <div class="card__header">event.location</div>
            <div class="card__main">${evt.location}</div>
            <div class="card__description">Some keys exist more than once on your keyboard. This provides the location of the key pressed. Try it with both shifts. <a class="card__link" href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location" target="_blank">More here</a></div>
        </li>

        <li class="card">
            <div class="card__header">event.code</div>
            <div class="card__main">${evt.code}</div>
            <div class="card__description">The physical key on the keyboard. Doesn't care if you are holding a modifier like Shift.</div>
        </li>

        <li class="card">
            <div class="card__header">event.which</div>
            <div class="card__main">${evt.which}</div>
            <div class="card__description">event.which and event.keyCode are (<a class="card__link" href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent" target="_blank">deprecated</a>) in modern browsers. Use .key  or instead. </div>
        </li>

        <li class="card">
            <div class="card__header">altKey</div>
            <div class="card__main">${evt.altKey}</div>
            <div class="card__description">${evt.altKey == true ? "printed Alt" : "Not printed"}</div>
        </li>

        <li class="card">
            <div class="card__header">ctrlKey</div>
            <div class="card__main">${evt.ctrlKey}</div>
            <div class="card__description">${evt.ctrlKey == true ? "printed Ctrl" : "Not printed"}</div>
        </li>

</ul>
    `
})