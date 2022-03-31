const myError = "Something didn't go as expected with Custom Styling, open the Developer console (Press F12 and open the Console Tab) for more information about potential errors.";
const myErrorIntro = 'Custom Styling Warning: ';
	/*-------------------------------------------
* move title to header if there is any title
* ------------------------------------------- */
function moveTitleToHeader() {
  const ztTitle = document.querySelector(".zt_title");
  if (ztTitle != null) {
    const mobileNav = document.querySelector("#mobile-nav-toggle");
    const header = document.querySelector("header > .widewrapper > .container");
  
    //move title to the header
    header.insertBefore(ztTitle, mobileNav)
		
		//try to remove unnecessary elements from HTML
		try {
			document.querySelectorAll(".widewrapper.main > .container > .row")[0].remove()
    	document.querySelector('.widewrapper.main > .container > .row:nth-child(2) > .col-md-12 > .row').remove()
    	document.querySelector('.widewrapper.main > .container > .row:first-child > .col-md-12 > br').remove()
		} catch(e) {
			throw myError;
		}
  }
  else {
		console.warn(myErrorIntro + 'Tree Title not enabled, if you want to display the title of the tree in the top right, enable Tree Title in Tree Settings > Display > Show Tree Name');
    return
  }
}

	/*-------------------------------------------
* check if tree has breadcrumbs, if not, alert user
* ------------------------------------------- */
function checkBreadcrumbs() {
	const breadcrumbs = document.querySelector('#zt_breadcrumbs');
	if (breadcrumbs == null) {
		throw (myErrorIntro + 'Breadcrumbs not enabled, custom CSS will not work correctly. Enable Tree Breadcrumbs in Tree Settings > Display > Show Breadcrumbs');
	}
	else {
		return
	}
}

	/*-------------------------------------------
* check if tree has referral icon, alert user
* ------------------------------------------- */
function checkReferral() {
	const referral = document.querySelector('#feedback-button ~ .hidden-print');
	if (referral != null) {
		console.warn(myErrorIntro + 'Zingtree Referral icon is enabled. Consider Disabling it in Tree Settings > Display > Show Referral Icon');
	}
	else {
		return
	}
}

/*----------------------------------------------------------
* hide empty nodes, dependent on checkTreeRendered function
* ---------------------------------------------------------- */
function hideEmptyNodes(nodes) {
	let amountOfNodes = 0;
  for (let node of nodes) {
    let nodeContent = node.querySelectorAll(".content-only")[0];
    if (nodeContent.innerHTML.trim().length == 0) {
      node.style.display = "none";
			amountOfNodes += 1;
    }
  }
	console.log("Successfully removed unnecessary/empty nodes: " + amountOfNodes);
}

/*---------------------------------------------------------------------------------------------------
* check if tree is rendered, if it is, return the resolved promise, if it's not, repeat the function
* --------------------------------------------------------------------------------------------------- */
function checkTreeRendered(time) {
  return new Promise(callback = (resolve, reject) => {
    const questionNodes = document.querySelectorAll(".zingtree-node")
		const questionNodes2 = document.querySelectorAll(".zingtree-node .panel-body.panels-node-content")
    if (questionNodes.length == 0) {
      setTimeout(function() {callback(resolve, reject)}, time)
    } else if (questionNodes.length > 0) {
      resolve(questionNodes2)
    } else {
      reject(new Error("No nodes in the Tree"));
    }
  })
}

window.addEventListener('DOMContentLoaded', function(e) {
	try {
		moveTitleToHeader();
	}
	catch(e) {
		alert(myError);
	}
	checkTreeRendered(100).then((value) => {
		try {
			checkBreadcrumbs();
		}
		catch(e) {
			console.warn(e)
			alert(myError);
		}
		checkReferral();
		hideEmptyNodes(value);
	}).catch((err) => console.error(err)) 
})
