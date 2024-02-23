//@ts-check

/**
 * Create a new Product item
 * @class
 */
export class Product {
    #id;
    #title;
    #description;
    #price;
    #thumbnail;
    #code;
    #stock;
    #status;
    #category;

    static #productsCreated = 0;
    static #requiredProperties = [
        "title",
        "description",
        "price",
        "code",
        "stock",
        "status",
        "category",
    ];

    constructor({ id, title, description, price,
        thumbnail,
        code,
        stock,
        status,
        category,
    }) {
        const tmpObject = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            status,
            category,
        };

        const isValid = Product.#requiredProperties.every(
            (property) => tmpObject[property] !== undefined,
        );
        if (!isValid) {
            throw new Error(
                "Unable to create new product instance with invalid values",
            );
        }

        // Unique id is needed
        this.#id = id ?? Product.#productsCreated++;
        this.#title = title;
        this.#description = description;
        this.#price = price;
        this.#thumbnail = thumbnail ?? [];
        this.#code = code;
        this.#stock = stock;
        this.#status = status ?? true;
        this.#category = category;
    }

    get title() {
        return this.#title;
    }
    get description() {
        return this.#description;
    }
    get price() {
        return this.#price;
    }
    get thumbnail() {
        return this.#thumbnail;
    }
    get stock() {
        return this.#stock;
    }

    get code() {
        return this.#code;
    }

    get id() {
        return this.#id;
    }

    get status() {
        return this.#status;
    }

    get category() {
        return this.#category;
    }

    set id(uniqueID) {
        this.#id = uniqueID;
    }

    toJSON() {
        const tmp = JSON.stringify(
            {
                id: this.#id,
                title: this.#title,
                description: this.#description,
                price: this.#price,
                thumbnail: this.#thumbnail,
                code: this.#code,
                stock: this.#stock,
                status: this.#status,
                category: this.#category,
            },
            null,
            4,
        );

        return JSON.parse(tmp);
    }

    toString() {
        return JSON.stringify(this);
    }
}
