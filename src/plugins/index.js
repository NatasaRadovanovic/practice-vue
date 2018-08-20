export default {
    install(Vue){
        Vue.directive('focus', {
            inserted:function(el, binding){
              let elementId = el.id;
              //let isDisable = binding.value; //binding ima value ,gledaj console.log sta vraca
              let focusAlways = binding.modifiers.always; //ako postoji bice true ako ne undifined
              console.log(binding);
              console.log(elementId);
              console.log(binding.value);
              if(focusAlways){
                return el.focus();
              }
              if(elementId !== binding.value){
                return;
              }
              el.focus();
            } 
          })
          
          Vue.directive('alert',{
            inserted:function(el, binding){
              el.style.backgroundColor = binding.value || 'red'; //prednost ima u tagu boja,ako se nista ne 
              //prosledi onda ce biti crvena
            }
          });

        Vue.prototype.$log = function(message){ //neki metod kroz plugin
            console.log(message);
        }

        Vue.component('MyButton', { //komponenta
            props:{
                title:{
                    default:'Default',
                    type: String
                }
            },
            // template:`
            // <a @click="onClick"
            // v-text="title"></a>
            // `,
            render(createElement){ //render treba da vrati novokreirani element
                return createElement('a', {
                    on:{
                        click:this.onClick
                    }
                }, [ this.title] )
            },
            methods:{
                onClick(event){
                    this.$emit('click', event)
                }
            }
        })
    }
}