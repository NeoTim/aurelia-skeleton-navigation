import {Behavior} from 'aurelia-templating';

export class Idea{
    static metadata(){
        return Behavior
            .attachedBehavior('idea')
            .withOptions.and((x)=>{
                x.withProperty('size')
            })
            .noView()
    }
    static inject(){
        return [Element]
    }

    constructor(element){
        console.log('Yolo')
        this.element = element;
    }

    attached(){
        this.element.classList.add(`my-${this.size}`);
    }
}
