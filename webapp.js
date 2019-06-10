function makePost(){
    event.preventDefault();
   // var createpost = document.getElementById("createpost").value;
    var cp = localStorage.getItem("POST");
    console.log("Got this from storage: ",cp);
    var divCreate = document.createElement("div");
    var divAtt = document.createAttribute("class");
    divAtt.value = "media text-muted pt-3";
    divCreate.setAttributeNode(divAtt);

    divAtt = document.createAttribute("id");
    // add divider counter
    divAtt.value = "userPost";
    divCreate.setAttributeNode(divAtt);

    var svgCreate = document.createElement("svg");
    var svgAtt = document.createAttribute("class");
    svgAtt.value = "bd-placeholder-img mr-2 rounded";
    svgCreate.setAttributeNode(svgAtt);

    // dont know if this will work
    svgCreate.setAttribute("width","32");
    svgCreate.setAttribute("height","32");
    svgCreate.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svgCreate.setAttribute("preserveAspectRatio","xMidYMid slice");
    svgCreate.setAttribute("focusable","false");

    svgCreate.setAttribute("focusable","false");




    return false;
}

// { <div class="media text-muted pt-3">

//             <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" 
//             xmlns="http://www.w3.org/2000/svg" 
//             preserveAspectRatio="xMidYMid slice" 
//             focusable="false" 
//             role="img" 
//             aria-label="Placeholder: 32x32">

//             <title>Placeholder</title>
//             <rect width="100%" height="100%" fill="#6f42c1"/>
//             <text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>

//             </svg>

//             <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
//               <strong class="d-block text-gray-dark"><!--ADD USERNAME HERE--></strong>
//               <!-- ADD POST HERE -->
//             </p>
//             <!-- <button class="btn btn-outline-secondary" type="button" id="button-addon2">DELETE</button> -->
//     </div> }