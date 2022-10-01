
//styling the text
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map ( (h) => {
	return `<span>${h}</span>`
	}).join('');

nama.innerHTML = huruf;


//changing the color of body with mousemove

let change = document.getElementsByTagName('div')[0];

	change.addEventListener('mousemove', function(event){
	const xPost = Math.round((event.clientX / window.innerWidth) * 255);
	const yPost = Math.round((event.clientY / window.innerWidth) * 255);

	document.body.style.backgroundColor = 'rgb('+ xPost +', '+ yPost +', 200 )';	
});

//manual colour setting
//menangkap slider

const rs = document.querySelector('input[name=redslide]');
const rg = document.querySelector('input[name=greenslide]');
const rb = document.querySelector('input[name=blueslide]');

rs.addEventListener('input', function(){
	const r = rs.value;
	const g = rg.value;
	const b = rb.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

rg.addEventListener('input', function(){
	const r = rs.value;
	const g = rg.value;
	const b = rb.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

rb.addEventListener('input', function(){
	const r = rs.value;
	const g = rg.value;
	const b = rb.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})


//button change 
const tmbl = document.querySelector('button');

	tmbl.addEventListener('click', function(){
		
	const r = Math.round(Math.random() * 255 * 1);
	const g = Math.round(Math.random() * 255 * 1);
	const b = Math.round(Math.random() * 255 * 1);
	
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
	});
	





