window.onload = function(){
	//canvas initiering
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	
	//canvas størrelse
	const W = window.innerWidth;
	const H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	//snøflak partikler
	const mp = 50; //max particles
	let particles = [];
	for(let i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*2+1, //radius
			d: Math.random()*mp //density
		})
	}
	
	//tegnefunksjon for snøpartikler
	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		
		ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
		ctx.beginPath();
		for(let i = 0; i < mp; i++)
		{
			let p = particles[i];
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		ctx.fill();
		update();
	}
	
	//bevege snøflak
	
	let angle = 0;
	function update()
	{
		angle += 0.01;
		for(let i = 0; i < mp; i++)
		{
			let p = particles[i];
			//oppdatere xy koordinater
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			//exit kode
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //2/3 av flakene
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					// hvis høyre
					if(Math.sin(angle) > 0)
					{
						// til venstre
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						// kom inn fra høyre
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	
	//animation loop
	setInterval(draw, 33);
}
