const btns = document.querySelectorAll('.btn');
const btn_bra = document.querySelectorAll('.branch');
const groupsproduct = document.querySelectorAll('.store-product');
const filter_laptop = document.querySelector('.filter-laptop');
const filter_phone = document.querySelector('.filter-phone');
let i = 0;

const ShowButton = (e)=>{
	btns.forEach((btn)=>{
		btn.classList.remove('active');}) /*All Items*/

	btns[e].classList.add('active'); /*Specify Item */
}
btns.forEach((btn,i)=>{
	btn.addEventListener('click',()=>{
		ShowButton(i);
	if(i === 2){filter_laptop.style.display="block";}
	if(i != 2){filter_laptop.style.display="none";}
	if(i === 3){filter_phone.style.display="inline-block";}
	if(i != 3){filter_phone.style.display="none";}
	})
})

const ShowButtonBranch = (e)=>{
	btn_bra.forEach((btn)=>{
		btn.classList.remove('active');}) /*All Items*/

	btn_bra[e].classList.add('active'); /*Specify Item */
}

btn_bra.forEach((btn,i)=>{
	btn.addEventListener('click',()=>{
		ShowButtonBranch(i);
	})
})



/*=====================Filter==========================*/
const filterbutton = (e)=>{
	e.preventDefault()
	const filter = e.target.dataset.filter;
	console.log(filter);

	groupsproduct.forEach((product)=>{
		if(filter === "all"){
			product.style.display="block"
		}else{
			if(product.classList.contains(filter)){
				product.style.display="block"
			}else{
				product.style.display="none";
			}
		}
	})
}
/*==============Filter Main Btn=============*/

btns.forEach((btn)=>{
	btn.addEventListener('click',filterbutton)
})

/*=============Filter Branch Btn============*/

btn_bra.forEach((btn)=>{
	btn.addEventListener('click',filterbutton)
})

/*=============Search==============*/
const search = document.querySelector('#search');
const titlehead = document.querySelectorAll('.product-details h2');


const searchfilter = (e)=>{
	const txt = e.target.value;
	/*const result = document.querySelector('.head');*/
	Array.from(titlehead).forEach((item)=>{
		const con = item.textContent;
		if(con.toLowerCase().indexOf(txt) != -1){
			item.parentElement.parentElement.style.display = "block";
		}else{
			item.parentElement.parentElement.style.display = "none";
		}
	})
}


search.addEventListener('keyup',searchfilter);

