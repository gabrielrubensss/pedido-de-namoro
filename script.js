var nao = document.getElementById("nao");
		nao.addEventListener("mouseover", function() {
			var randomX = Math.random() * window.innerWidth - 50;
			var randomY = Math.random() * window.innerHeight - 50;
			nao.style.position = "fixed";
			nao.style.top = randomY + "px";
			nao.style.left = randomX + "px";
		});

        var sim = document.getElementById("sim");
		sim.addEventListener("click", function() {
			window.alert('PARABÉNS! Você acaba de assinar um CONTRATO no qual há uma cláusula em que você NÃO poderá cancelar este CONTRATO de maneira alguma. Conforme o contexto do CONTRATO você acaba de assinar um termo no qual está preste a se tornar a mulher mais feliz e amada deste MUNDO! EU TE AMO MIL MILHÕES \u2764\uFE0F')
		});