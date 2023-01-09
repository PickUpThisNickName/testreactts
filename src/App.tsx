import { Product } from './components/Product'
import {useProducts} from "./hooks/products";
import {Loader} from "./components/loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/modal";
import {CreateProduct} from "./components/CreateProduct";
import {useState} from "react";
import {Iproduct} from "./models";

function App() {
  const {loading, products, error, addProduct} = useProducts()
    const [modal, setmodal] = useState(true)

  const createHandler = (product:Iproduct) => {
    setmodal(false)
    addProduct(product)
  }

return(
  <div className='container mx-auto max-w-2xl pt-5'>
    {loading && <Loader/>}
    {error && <ErrorMessage error={error}/>}
    {products.map((product, index) => <Product product = {product} key={product.id}/>)}
      {modal && <Modal title={"Create new product"} onClose={()=> setmodal(false)}>
          <CreateProduct onCreate={createHandler}/>
      </Modal>}
    <button
        className={"fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"}
        onClick={()=>setmodal(true)}
    >
      +
    </button>
  </div>
)
}

export default App;
