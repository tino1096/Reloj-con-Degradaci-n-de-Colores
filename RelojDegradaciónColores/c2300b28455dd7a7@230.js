// https://observablehq.com/@oxydum/gradient-clock@230
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Reloj con Degradación de Colores` /* Cambio agregar titulo*/
)});
  main.variable(observer()).define(["html","getSky","now","pad"], function(html,getSky,now,pad){return(
html`
<style>
.clock {
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font: 100 200px/1 apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  color: hsla(0, 80%, 100%, .75);
}

.time {
  display: flex;
  align-items: center;
  justify-content: center;

}

.date {
  font-size: .25em;
  font-weight: 500;

}

.time__block {
  diplay: block;
  /*width: 1.25em;*/
  text-align: center;
}

.time__block--separator {
  animation: pulse 1s infinite;
  width: auto;
}

.time__texto {
  width: auto;
}

.date--texto{
  width: auto;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  35% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

</style>

    
    <span class="time time__texto">Tecnológico Nacional de México Campus Jerez</span>
    <span class="time time__texto">Ingeniería en Sistemas Computacionales</span>
    <span class="time time__texto">Interfaces Web</span>
    <span class="time time__texto">Docente: M.G.T.I. César Landeros Soriano</span>
    <span class="time time__texto">Alumnos:</span>
    <span class="time time__texto">Esteban Faustino Muñoz Hidalgo. S15070115.</span>
    <span class="time time__texto">Leonardo Bonilla Trujillo. S15070121.</span>



<div class="clock" style="background: linear-gradient(to bottom, ${getSky(now.getHours()).map(stop => `${stop.color} ${stop.offset}`).join(', ')})">
  <div class="time">
    
    
    <span class="time__block time__block--hours">${pad(now.getHours())}</span>
    <span class="time__block time__block--separator">:</span>
    <span class="time__block time__block--minutes">${pad(now.getMinutes())}</span>
    <span class="time__block time__block--separator">:</span>
    <span class="time__block time__block--minutes">${pad(now.getSeconds())}</span>

  </div>

   <span class="date date--texto">↑Hora↑</span>
   <span class="date date--texto">֍֍֎֎֍֍֎֎֍֍֎֎֍֍֎֎</span>
  <div class="date">${now.toLocaleString(navigator.language,{
 
    weekday: "long", 
    day: "2-digit", 
    month: "long", 
    year: "numeric" 
  })}</div>
</h1>
    <span class="date date--texto">↑Fecha↑</span>
`
)});
  main.variable(observer("now")).define("now", ["Promises"], function*(Promises)
{
  while (true) {
    yield Promises.delay(1000, new Date())
  }
}
);
  main.variable(observer("skies")).define("skies", function(){return(
[
[{ color: '#00001c', offset: '0%'  }, { color: '#00001c', offset: '100%'}],
[{ color: '#020111', offset: '85%' }, { color: '#191621', offset: '100%' }],
[{ color: '#020111', offset: '60%' }, { color: '#20202c', offset: '100%' }],
[{ color: '#020111', offset: '10%' }, { color: '#3a3a52', offset: '100%' }],
[{ color: '#20202c', offset: '0%'  }, { color: '#515175', offset: '100%' }],
[{ color: '#40405c', offset: '0%'  }, { color: '#6f71aa', offset: '80%' }, { color: '#8a76ab', offset: '100%' }],
[{ color: '#4a4969', offset: '0%'  }, { color: '#7072ab', offset: '50%' }, { color: '#cd82a0', offset: '100%' }],
[{ color: '#757abf', offset: '0%'  }, { color: '#8583be', offset: '60%' }, { color: '#eab0d1', offset: '100%' }],
[{ color: '#82addb', offset: '0%'  }, { color: '#ebb2b1', offset: '100%' }],
[{ color: '#94c5f8', offset: '1%'  }, { color: '#a6e6ff', offset: '70%' }, { color: '#b1b5ea', offset: '100%' }],
[{ color: '#b7eaff', offset: '0%'  }, { color: '#94dfff', offset: '100%' }],
[{ color: '#9be2fe', offset: '0%'  }, { color: '#67d1fb', offset: '100%' }],
[{ color: '#90dffe', offset: '0%'  }, { color: '#38a3d1', offset: '100%' }],
[{ color: '#57c1eb', offset: '0%'  }, { color: '#246fa8', offset: '100%' }],
[{ color: '#2d91c2', offset: '0%'  }, { color: '#1e528e', offset: '100%' }],
[{ color: '#2473ab', offset: '0%'  }, { color: '#1e528e', offset: '70%' }, { color: '#5b7983', offset: '100%' }],
[{ color: '#1e528e', offset: '0%'  }, { color: '#265889', offset: '50%' }, { color: '#9da671', offset: '100%' }],
[{ color: '#1e528e', offset: '0%'  }, { color: '#728a7c', offset: '50%' }, { color: '#e9ce5d', offset: '100%' }],
[{ color: '#154277', offset: '0%'  }, { color: '#576e71', offset: '30%' }, { color: '#e1c45e', offset: '70%' }, { color: '#b26339', offset: '100%' }],
[{ color: '#163C52', offset: '0%'  }, { color: '#4F4F47', offset: '30%' }, { color: '#C5752D', offset: '60%' }, { color: '#B7490F', offset: '80%' }, { color: '#2F1107', offset: '100%' }],
[{ color: '#071B26', offset: '0%'  }, { color: '#071B26', offset: '30%' }, { color: '#8A3B12', offset: '80%' }, { color: '#240E03', offset: '100%' }],
[{ color: '#010A10', offset: '30%' }, { color: '#59230B', offset: '80%' }, { color: '#2F1107', offset: '100%' }],
[{ color: '#090401', offset: '50%' }, { color: '#4B1D06', offset: '100%' }],
[{ color: '#00001c', offset: '60%' }, { color: '#151020', offset: '100%' }],
[{ color: '#00001c', offset: '0%'  }, { color: '#00001c', offset: '100%'}]
]
)});
  main.variable(observer("getSky")).define("getSky", ["skies"], function(skies){return(
h => skies[h]
)});
  main.variable(observer("pad")).define("pad", function(){return(
n => n < 10 ? `0${n}` : `${n}`
)});
  return main;
}
