(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9323:function(A,e,t){Promise.resolve().then(t.t.bind(t,8707,23)),Promise.resolve().then(t.t.bind(t,8920,23)),Promise.resolve().then(t.bind(t,8168)),Promise.resolve().then(t.bind(t,5489)),Promise.resolve().then(t.bind(t,6507)),Promise.resolve().then(t.bind(t,4970)),Promise.resolve().then(t.bind(t,6288)),Promise.resolve().then(t.bind(t,5182)),Promise.resolve().then(t.bind(t,8990)),Promise.resolve().then(t.bind(t,7598)),Promise.resolve().then(t.bind(t,368)),Promise.resolve().then(t.bind(t,1121)),Promise.resolve().then(t.bind(t,7976)),Promise.resolve().then(t.bind(t,1660)),Promise.resolve().then(t.bind(t,2356)),Promise.resolve().then(t.bind(t,9861)),Promise.resolve().then(t.bind(t,1185)),Promise.resolve().then(t.bind(t,3094)),Promise.resolve().then(t.bind(t,4074)),Promise.resolve().then(t.bind(t,4013)),Promise.resolve().then(t.bind(t,9076)),Promise.resolve().then(t.bind(t,5438)),Promise.resolve().then(t.bind(t,7320)),Promise.resolve().then(t.bind(t,3021)),Promise.resolve().then(t.bind(t,9642)),Promise.resolve().then(t.bind(t,1823)),Promise.resolve().then(t.bind(t,9547)),Promise.resolve().then(t.bind(t,3861)),Promise.resolve().then(t.bind(t,4426)),Promise.resolve().then(t.bind(t,7201)),Promise.resolve().then(t.bind(t,3024)),Promise.resolve().then(t.bind(t,4622)),Promise.resolve().then(t.bind(t,8681)),Promise.resolve().then(t.bind(t,3268)),Promise.resolve().then(t.bind(t,9520)),Promise.resolve().then(t.bind(t,1971))},1185:function(A,e,t){"use strict";t.r(e);var i=t(9268),a=t(6006),s=t(474);t(2870),e.default=()=>{let[A,e]=(0,a.useState)("newsletter"),[t,r]=(0,a.useState)(""),[l,d]=(0,a.useState)("newsletter"),[n,b]=(0,a.useState)("newsletter"),[o,u]=(0,a.useState)(!1),[h,c]=(0,a.useState)("newsletter"),m=async i=>{i.preventDefault(),u(!0);try{let i=await fetch("/api/sendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A,email:t,message:l,number:n,subject:h})});await i.text(),s.Am.success("Email sent successfully!"),u(!1),e(""),r(""),c(""),d(""),b("")}catch(A){s.Am.error("Internal Server Error!"),u(!1)}};return(0,i.jsx)("section",{children:(0,i.jsxs)("div",{className:"relative bg-violet-600",children:[(0,i.jsx)("div",{className:"absolute inset-x-0 bottom-0",children:(0,i.jsx)("svg",{viewBox:"0 0 224 12",fill:"currentColor",className:"w-full -mb-1 text-white",preserveAspectRatio:"none",children:(0,i.jsx)("path",{d:"M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"})})}),(0,i.jsx)("div",{className:"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",children:(0,i.jsxs)("div",{className:"relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center",children:[(0,i.jsx)("h2",{className:"mb-6 text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none",children:"Subscribe to our newsletter"}),(0,i.jsx)("p",{className:"mb-6 text-base text-white md:text-lg",children:"Want to stay ahead of the competition? Our newsletter delivers the latest updates and expert advice on software development and digital marketing strategies."}),(0,i.jsxs)("form",{onSubmit:m,className:"flex flex-col items-center w-full mb-4 md:flex-row md:px-16",children:[(0,i.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600",hidden:!0,children:"Subject"}),(0,i.jsx)("input",{placeholder:"Email",required:"",name:"email",id:"email",value:t,onChange:A=>r(A.target.value),type:"text",className:"flex-grow w-full h-12 px-4 mb-3  transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"}),(0,i.jsx)("button",{type:"submit",className:"inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none",children:o?"Sending...":"Subscribe"})]}),(0,i.jsx)(s.Ix,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,style:{zIndex:2}}),(0,i.jsx)("p",{className:"max-w-md mb-10 text-xs tracking-wide text-white sm:text-sm sm:mx-auto md:mb-16",children:"Stay informed and take your business to the next level - subscribe now!"})]})})]})})}},3024:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/1.698f6fb5.webp",height:734,width:660,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAQCdASoHAAgAAkA4JYwCdIExFcK9lOAA/thA+9URGEcIevYcPqeUOopDJZ0RPH7jGmoNFBmOIJFViTbVpwnPKwvmiVCO/ggpCI7UdAoAtIAA",blurWidth:7,blurHeight:8}},7201:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/2.bb3261e6.webp",height:516,width:383,blurDataURL:"data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoGAAgAAkA4JZQCdAEO5gGlDgAA/P/5W+S9uQu2oBHzMfHmSffgmWV6PcxjRsWTIQDmoHEkkWDp4AAA",blurWidth:6,blurHeight:8}},4622:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/3.94366198.webp",height:1039,width:750,blurDataURL:"data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoGAAgAAkA4JQBdgB5vaYaAAP734XPA903xwscH/DZmBO+K2v77oSAzX7fc9GyxT+c/bDUPn/l7ykAA",blurWidth:6,blurHeight:8}},3268:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/4.b702db7e.webp",height:659,width:461,blurDataURL:"data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoGAAgAAkA4JYwCdAaYu3pcF9hcAPlmwu5/8qi3tNepKYGsM4CPe+EdS1dbZ5mWj3Ww8rmIGAJzkdEsf4yb+YmuyAA=",blurWidth:6,blurHeight:8}},1971:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/5.42c7d61c.webp",height:895,width:633,blurDataURL:"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoGAAgAAkA4JZACdAD0oTd0KAD+2Hdu7DrFQs2kBdNlAjRTeC+BtAkFAAso/76yq1XzoTOn7FAQdgBkpgA=",blurWidth:6,blurHeight:8}},8681:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/6.d33d583d.webp",height:2280,width:1452,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoFAAgAAkA4JQBOgB6GNcUAAP6XmiewAukMpnJkNoMHejnh5pQ9GduDEeqy1+Fq4xiUn9gFSVmAAA==",blurWidth:5,blurHeight:8}},9520:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/7.cad0f2db.webp",height:1365,width:1365,blurDataURL:"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoIAAgAAkA4JbACdAEekvjjwmgA+xDsiu8QtWByun9npcx7hwtXo6RYSo4N7gj3sv8W/JuPdGwSE/Z17u/gfekhuLZP/MoAAAA=",blurWidth:8,blurHeight:8}},4970:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/aboutimg.edd61eb4.webp",height:6e3,width:4004,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoFAAgAAkA4JZQCdADze7hYAP6s3Iweie13Y/bPzXuY3TD584dp8lw4oXVgeSckobJ3iAAA",blurWidth:5,blurHeight:8}},3021:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/corner.6fe70e72.webp",height:396,width:840,blurDataURL:"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACQAQCdASoIAAQAAkA4JZwAAp2gA8AA/vw/rbbSs19hUAzUlIjMkgUwEAA=",blurWidth:8,blurHeight:4}},5438:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/coty.0c20d44a.svg",height:55,width:106,blurWidth:0,blurHeight:0}},8168:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/features-2.97af791a.webp",height:872,width:1215,blurDataURL:"data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAADBoVPL1wNwAWZtfR+O5wChHW/////7hDDNz/////pm2cZODe+cOqKCkigV2TFCkOAFZQOCBiAAAA8AEAnQEqCAAGAAJAOCWgAnQBFlDue/+AAP7v+Qw+OYLMSRrv6T9VBvgle+H+UflDmCh5dRHKh/ylUV5YtUm/qrCDFX5lFFuWWOJjbKjl+pv1O13x1KSKQCWCMIuAyQMAAAA=",blurWidth:8,blurHeight:6}},7320:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/ge.b6207685.svg",height:55,width:55,blurWidth:0,blurHeight:0}},3861:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/javelin.c92d0090.webp",height:59,width:100,blurDataURL:"data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAAAB5sLDQWAAAAIpUmAl1kZmFnhoJnXphvZYtalVo1Hj0zMSovOwBWUDggIgAAAJABAJ0BKggABQACQDglpAAC50WsAAD+8NSHFTp1+3AAAAA=",blurWidth:8,blurHeight:5}},4426:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/logic.3472e879.webp",height:89,width:226,blurDataURL:"data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAADVxZDAAAAAAqt7Q6P0hHHg1RUgwAAAAAAFZQOCA8AAAAsAEAnQEqCAADAAJAOCWwAnQA9HFVwAD+8N+jE/8AywtePXHeFSIvND6NdrKO8Py+7zdWH43/RyYp0+AA",blurWidth:8,blurHeight:3}},5489:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/mission.c4a54ba3.webp",height:7730,width:7730,blurDataURL:"data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoIAAgAAkA4JQBYheADE4fppe8AAP76WU1TPj/Emin+6t5R+cqA1eydjfGZJaXW2QMWs3ZUj54n1ng5CbERsMg0gAA=",blurWidth:8,blurHeight:8}},9861:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/mobile.2f500bc5.webp",height:700,width:500,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoGAAgAAkA4JbACdAEO2pDgIAD+/IjaqK8qcqH0pnWDbY58JLttLKrA7z3Dx4bi3mYT33YqFtof0I9d8Qf+XkqWoch4QAAA",blurWidth:6,blurHeight:8}},9547:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/oldr.972ec981.webp",height:79,width:400,blurDataURL:"data:image/webp;base64,UklGRmYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAGRkFFQkWJI5fbVxqYVwzmQBWUDggLgAAALABAJ0BKggAAgACQDglAE6AIgaw5nAA/veA38j2QI8h5MXh/dDov33aBl5QkAA=",blurWidth:8,blurHeight:2}},8990:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/p5.00996811.webp",height:596,width:796,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAYAAkA4JZwAApxXZ+4AAP7eO2XrdGb80NZZt6n7BOkH7z1AW0AMG/dO2BB7fPvi4GWctBsgAA==",blurWidth:8,blurHeight:6}},6288:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/pone.07ae64de.webp",height:661,width:917,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoIAAYAAkA4JZACdAD0Zj4QlgAA/vTAyvANf04GdXawanqTdZ/DZ3HQVudeJ1EIFdWwGWGQrfrJnyYkqm4iKYTJksAAAA==",blurWidth:8,blurHeight:6}},2356:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/portfolio1.93d4d02a.webp",height:749,width:1080,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoIAAYAAkA4JZwCw7EPDKke5AAA/vyiN0zOYMw94ioiqxEl7zE8II8JSvSSDZi0bg2IZ5CABeAAAA==",blurWidth:8,blurHeight:6}},1660:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/portfolio13.1cd3c32d.webp",height:803,width:1005,blurDataURL:"data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAYAAkA4JZwCw7Dyfv4AAP77TDR51yiTz54nGyKB/K/dPc0FW2atBm4AAA==",blurWidth:8,blurHeight:6}},5182:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/portfolio2.79aa95de.webp",height:1080,width:1147,blurDataURL:"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAgAAkA4JQBOgB6W04xYAP72+/WByAZJi08aCvsUxp4nKoZ3eQAznrgr1kKKK79a5Wsv2cB/3zQAAAA=",blurWidth:8,blurHeight:8}},7976:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/portfolio3.1b9446ce.webp",height:810,width:1080,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoIAAYAAkA4JZQAD4lvvwEeiIAA/vtLFaoKHcBdnOu0Y9DNPoueTMuh2geSmfalE/LUXAAA",blurWidth:8,blurHeight:6}},1121:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/portfolio4.36b3090d.webp",height:805,width:1080,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAQCdASoIAAYAAkA4JYwCdAEfhkqOhAAA/vvOFFcNRFZqd1GJjyhFDa1sNAaIe6GBL7phmaH8jH+pmhb5u+j8WWre6W/F3goY7RBgsy9/IAAA",blurWidth:8,blurHeight:6}},368:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/portfolio5.fcba9c86.webp",height:816,width:1080,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAYAAkA4JagCdAD5aezuAAD++Zl6BzRs94VTi2yzuxOuAJlpcwqoDFAbkUHUz1HNcgI4DDTmt/jBSDLz9o2+HmUZUAAA",blurWidth:8,blurHeight:6}},7598:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/ptwo.e7fbd457.webp",height:877,width:1417,blurDataURL:"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAkA4JQBOgB6Q/22AAP7uWwBdsBT8/BOCM+LcDWxzxACdYXjCaTbREAAA",blurWidth:8,blurHeight:5}},1823:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/sbueaty.607ddf24.webp",height:41,width:116,blurDataURL:"data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAISEAAhY2YG15fYSLfbmJt4J3W0M1GwFHAFZQOCAyAAAAkAEAnQEqCAADAAJAOCWMAAJYuiCAAP7wSKPBW22UaKmnj9v1m2epRpEJ/natj67AAAA=",blurWidth:8,blurHeight:3}},3094:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/testimonial1.92e8cfda.webp",height:370,width:390,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAQAgCdASoIAAgAAkA4JQBOj+ACudDU7zUAAP75A74gENd+Ez4WVQ5fUXhgP7MhEg3gOa97w4/HR5ziixifGeAqPQNNr39w/5ezCku93B4kAAAA",blurWidth:8,blurHeight:8}},4074:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/testimonial2.d8e3c8d3.webp",height:926,width:867,blurDataURL:"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoHAAgAAkA4JZQCdAD0meBecAD+7m6jZz2V1JU7+8FDONlLTCVXNCHTWahBbUVT8ewrbBJx7v1qIBjMQAA=",blurWidth:7,blurHeight:8}},4013:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/testimonial3.8cec33bc.webp",height:250,width:250,blurDataURL:"data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAgAAkA4JaQAAsaWPAKMAAD++WdyVGGoZx4J7zndjg5ew5UJePbMazx78RcX7I38MK7cvBm4AAAA",blurWidth:8,blurHeight:8}},6507:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/tree.9d71229f.webp",height:960,width:1440,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JZwCdH8AFZIQsAD+92/NM8G9f+sA7CnqxTsezorFL/Lefe6llFalnCWMe3E20egAAA==",blurWidth:8,blurHeight:5}},9642:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/zeina.5947929f.webp",height:82,width:228,blurDataURL:"data:image/webp;base64,UklGRooAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAADj4ECQcDBQFNdFiZf46bSiFfIj00HzMbAFZQOCBKAAAAsAIAnQEqCAADAAJAOCWwAnS6AfgAzADJAAUOcjAAAP5N+AcC3P+7WAYjIUQyf/iYhqt9joNWNef/zv8ZkLW8yvW4sUf8G/7ZgAA=",blurWidth:8,blurHeight:3}}},function(A){A.O(0,[707,920,76,667,488,744],function(){return A(A.s=9323)}),_N_E=A.O()}]);