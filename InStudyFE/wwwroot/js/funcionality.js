$(document).ready(function(){
    $("#js-FooterScrollToTopClick").click(function(){
        const {
            height: e
        } = document.body.getBoundingClientRect(),
         t = 650 * Math.log(1 + e / 1e3),
          {
            top: i,
            left: n
        } = document.getElementById('js-FooterScrollToTopAnimate').getBoundingClientRect();
        document.getElementById('js-FooterScrollToTopClick').classList.add("FooterRocketLaunch"),
         document.getElementById('js-FooterScrollToTopAnimate').style.position = "fixed",
          document.getElementById('js-FooterScrollToTopAnimate').style.top = `${i}px`,
          
           document.getElementById('js-FooterScrollToTopAnimate').style.left = `${n}px`;
        let r = i;
        
        const o = Math.max(Math.log(t / i) / 10, .1),
            a = setInterval((() => document.getElementById('js-FooterScrollToTopAnimate').style.top = (r -= o) + "px"), 1);
            
            
                setInterval((()=>{document.getElementById('js-FooterScrollToTopClick').classList.remove("FooterRocketLaunch"), document.getElementById('js-FooterScrollToTopAnimate').removeAttribute("style")}),t);
            
        
      });
    
  
  });