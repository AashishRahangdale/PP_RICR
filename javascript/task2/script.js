

        function increase() {
            const out = document.getElementById('counter');
            if(Number(counter.innerText) <10 )
                {
                    out.innerText = Number(out.innerText)+1;
                }

        }
v
        function decrease() {
            const out = document.getElementById('counter');
            if(Number(counter.innerText) >0 )
                {
                    out.innerText = Number(out.innerText)-1;
                }
        }

        function reset() {
            const out = document.getElementById('counter');

              out.innerText='0'
        }

