class productManager {
    constructor(){
        this.products = []
        this.index = 0
    }

    getProducts = () => {
        return this.products
    }
    getProductById = (id) => {
        return this.products.find((products) => products.id === id)
    }
    addProduct = (title,description,price,thumbnail,code,stock) => {
        this.index++
        const id = this.index
        const product = { id, title, description, price, thumbnail, code, stock}
        //que todas las propiedades sean obligatorias
        if(!title || !description || !price || !thumbnail || !code || !stock){
            return console.log("Error, faltan datos")
        }
        // validar que no se repita el codigo
        const index = this.products.findIndex((p) => p.code === code);
        if (index !== -1) {
        return console.log("Error, hay un codigo similar");
        }

            this.products.push(product)
        }
    }

const manager = new productManager()
manager.addProduct('Computadora','Es una computadora','350000','./img/computadora.jpg',3554,5)
manager.addProduct('Caballo','Es un caballo','5','./img/caballo.jpg',1414,1)
manager.addProduct('Rinoceronte','Es un rinoceronte','200000','./img/rinoceronte.jpg',1414,99)
manager.addProduct('Generaerrores','Es un generaerrores','000','./img/errores.jpg',1414,99)
console.log(manager.getProducts())
console.log('Este es el producto que buscaste segun el ID:', manager.getProductById(2))
