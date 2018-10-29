console.log('works');
const myFunction = () => {
    const x = document.getElementById("navQuery");
    (x.className === "navbar") ? x.className += " responsive" :
                                         x.className = "navbar";
}
