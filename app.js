// for nested div 

/*
<div id="parent">
    <div id="child">
    <h1> im a h1 tag</h1>
    </div>
</div>

ReactElement(object)=> HTML(Browser understands)
*/ 
const parent=React.createElement(
    "div",
    {id:"parent"},[
    React.createElement( "div", {id:"child"},[
        React.createElement("h1",{},"I am a H1 tag"),
        React.createElement("h2",{},"I am a H2 tag")]
    ),
        React.createElement( "div", {id:"child2"},[
        React.createElement("h1",{},"I am a H1 tag"),
        React.createElement("h2",{},"I am a H2 tag")]
    ),
    ]

);



// for single div
const heading=React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from React!");

console.log(parent); //object
const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent); 
// root.render(heading);


const king=React.createElement("div",{id:"queen"},
    React.createElement("h1",{},"I am king1"),
    React.createElement("h2",{},"I am King2")

);
root.render(king);