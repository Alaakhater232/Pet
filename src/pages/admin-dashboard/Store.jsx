import React, { Fragment, useEffect, useState } from 'react'
import { RiAddLine } from "react-icons/ri";
import AddProductModal from '../../components/admindash/AddProductModal';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import ProductsTable from '../../components/admindash/ProductsTable';
// import OrdersTable from '../../components/admindash/OrdersTable';





export default function Store() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        //get products from firebase
        const getProducts = async () => {
            try {
                const productsRef = collection(db, 'products');
                const querySnapshot = await getDocs(productsRef);
                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productsData);
            } catch (error) {
                toast.error("Failed to fetch products, error:" + error.message, { autoClose: 3000 });
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, [])

    //delete product from firebase
    const handleDeleteProduct = async (id) => {
        try {
            await deleteDoc(doc(db, "products", id));
            setProducts(products => products.filter(product => product.id !== id));
            toast.success("Product deleted successfully", { autoClose: 3000 });
            setLoading(true);
            setTimeout(() => {
                window.location.reload();

            }, 3000);
        } catch (error) {
            toast.error("Failed to delete product, error:" + error.message, { autoClose: 3000 });
        }
    }



    return (
        <Fragment>
            <h1>Store</h1>
            <p>Managing all Products and Orders will be done in the store page </p>
            <div className='d-flex align-items-center justify-content-end mt-4' >
                <button className='custom-button d-flex align-items-center fw-bold' data-bs-toggle="modal" data-bs-target="#addproduct" > <RiAddLine size={20} /> Add Product</button>
            </div>
            <AddProductModal />
            {loading ? (<h3 className='text-center mt-5'><BeatLoader color='#D9A741' /></h3>) : products?.length === 0 ? <h3 className='text-center mt-5'>No Products found</h3> : (

                <>

                    <ProductsTable products={products} setProducts={setProducts} handleDeleteProduct={handleDeleteProduct} />
                    <hr />
                    {/* <OrdersTable /> */}
                </>




            )}
        </Fragment>
    )
}
