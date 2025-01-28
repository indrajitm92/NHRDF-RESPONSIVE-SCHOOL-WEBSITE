document.addEventListener('DOMContentLoaded',() => {
    // timestamp show js
    let timestamp = document.querySelector('.timestamp');
    timestamp.innerHTML = TimeStamp(false,false,true);
    setInterval(() => {
        timestamp.innerHTML = TimeStamp(false,false,true);
    }, 1000);

    /// toggle button
    let toggleBtn = document.getElementById('toggle_btn');
    toggleBtn.onclick = () => {
        let menu = document.querySelector(".nav_item ul");
        menu.classList.toggle("active");

        let icon = document.querySelector(".toggle_btn .icon");
        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-bars-staggered");
        } else {
            icon.classList.remove("fa-bars-staggered");
            icon.classList.add("fa-bars");
        }
    }

    // sticky header
    let headerBottom = document.querySelector('.header_bottom');
    let headerBottomHeight = headerBottom.offsetTop + headerBottom.offsetHeight;
    window.addEventListener('scroll',() => {
    if (window.scrollY > headerBottomHeight) {
        headerBottom.classList.add('fixed');
    } else {
        headerBottom.classList.remove('fixed');
    }
  })

  // chatbox
  let chat_icon = document.querySelector('.chat_icon');
  let messagr_box = document.querySelector('.messagr_box');
  chat_icon.addEventListener('click',() => {
    messagr_box.classList.toggle('active');
  })
  let close_btn = document.querySelector('.close_btn');
  close_btn.addEventListener('click',() => {
    messagr_box.classList.remove('active');
  })

  // message send
  let send_btn = document.querySelector('#send_btn');
  let message = document.querySelector('#message_input');
  let message_wrap = document.querySelector('.messages');
  send_btn.addEventListener('click',() => {
   let input_message = message.value;
   if(input_message == '') {
       alert('Please Enter Your Message');
   }
   else{
    let message_show =`<div class="sender d-flex align-items-center gap-2 mb-2 justify-content-start">
                            <div class="author_img">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div class="message">
                                <p>${input_message}</p>
                            </div>
                        </div>`;


   message_wrap.innerHTML += message_show;
   message.value = '';
   }
   

  });
  let clear_btn = document.querySelector('.clear_btn');
  clear_btn.addEventListener('click',() => {
    message_wrap.innerHTML = '';
  });

  // faq js

  let faqTitles = document.querySelectorAll('.faq_title');
  faqTitles.forEach((title) => {
      title.onclick = ((event) => {
        /* let faq_items = document.querySelectorAll('.faq_item');
        faq_items.forEach((item)=>{
            if(item.classList.contains('active')){
                item.classList.remove('active');
            }
        }); */
        event.target.closest('.faq_title').parentElement.classList.toggle('active');
      });
  });


  
});
