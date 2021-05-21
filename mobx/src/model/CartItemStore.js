import {action, autorun, computed, makeObservable, observable, reaction, when} from "mobx";

export class CartItem {
    id
    title
    description
    price
    count = 0

    constructor({id, title, description, price, count}) {
        makeObservable(this, {
            count: observable,
            total: computed,
            incr: action,
            decr: action
        })
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.count = count || 0;


        autorun(() => console.log(`Count: ${this.count}`))

        when(() => this.count > 15, () => console.log(`${this.count} > 15`));

        reaction(() => this.count, (cont, prevCount) => {
            console.log(`Previews Count ${prevCount}, Count ${count} `)
        })
    }

    get total() {
        return this.price * this.count
    }

    incr = () => {
        this.count++
    }

    decr = () => {
        if (this.count > 0) {
            this.count--
        } else {
            this.count = 0;
        }
    }
}