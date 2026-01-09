            setInterval(function () {
                const newBubble = document.createElement('div');
                newBubble.classList.add('bubbles');
                document.body.appendChild(newBubble);
                newBubble.style.top = Math.floor(Math.random() * window.innerHeight + 1) + 'px';
                newBubble.style.left = Math.floor(Math.random() * window.innerWidth + 1) + 'px';

                const myDirection = Math.floor(Math.random() * 5);
                setTimeout(function () {
                    newBubble.style.opacity = '0.5';
                }, 1);

                const speed = 0.16;
                let mytime = setInterval(function () {
                    if (myDirection === 1) {
                        newBubble.style.top = (parseInt(newBubble.style.top) - speed) + 'px';
                        newBubble.style.left = (parseInt(newBubble.style.left) - speed) + 'px';
                    } else if (myDirection === 2) {
                        newBubble.style.top = (parseInt(newBubble.style.top) - speed) + 'px';
                        newBubble.style.right = (parseInt(newBubble.style.right) - speed) + 'px';
                    } else if (myDirection === 3) {
                        newBubble.style.top = (parseInt(newBubble.style.top) + speed) + 'px';
                        newBubble.style.left = (parseInt(newBubble.style.left) + speed) + 'px';
                    } else {
                        newBubble.style.top = (parseInt(newBubble.style.top) + speed) + 'px';
                        newBubble.style.right = (parseInt(newBubble.style.right) + speed) + 'px';
                    }
                    if (newBubble.style.top <= 0) return clearInterval(mytime);
                    if (newBubble.style.left <= 0) return clearInterval(mytime);
                    if (newBubble.style.right >= window.innerWidth) return clearInterval(mytime);
                    if (newBubble.style.bottom >= window.innerWidth) return clearInterval(mytime); 
                }, 1000 / 60);

                setTimeout(function () {
                    newBubble.classList.add('bubble-hide');
                    setTimeout(function () {
                        newBubble.remove();
                    }, 2000);
                }, Math.floor(Math.random() * 1000) + 2000);
            }, 1000);