window.onload = function(){
let listElements = document.getElementById("boxSection");
let elemnts = [...listElements.children]; 

	/***
	shuffle the list
	**/
	shuffleElements = ()=>{
		let i = 0;
		elemnts = shuffle(elemnts);
		refresh();
	} 
	/***
	sort the list
	**/
	sortElements = ()=>{
		elemnts = elemnts.sort((val1,val2)=>{
			return val1.innerText - val2.innerText;
		})
		refresh();
	} 
	/**
	refresh of the elements
	*/
	refresh= () =>{
		let i = 0;
		while(i < elemnts.length)
		{
			listElements.appendChild(elemnts[i]);
			++i;
		}
	}
	/**
	 * shuffle method 
	 */
	shuffle=(items)=> {
		let cached = [...items]
		let temp, i = cached.length, rand;
		while(--i)
		{
			rand = Math.floor(i * Math.random());
			temp = cached[rand];
			cached[rand] = cached[i];
			cached[i] = temp;
		}
		return cached;
	}
} 