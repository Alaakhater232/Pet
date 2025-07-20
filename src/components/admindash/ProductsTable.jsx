import React, { Fragment, useState } from 'react'
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import ViewProductModal from './ViewProductModal';
import EditProductModal from './EditProductModal';
import ConfirmModal from '../ConfirmModal';


import { BiSearchAlt2 } from "react-icons/bi";
export default function ProductsTable({ products, setProducts, handleDeleteProduct }) {
    const [showConfirm, setShowConfirm] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');


    // filter doctors by name, email, or specialization
    const filterProducts = products.filter(product => {
        const nameMatch = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
        const priceMatch = product.price.includes(searchTerm);
        const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
        return (nameMatch || priceMatch) && categoryMatch;
    })
    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="search-box position-relative" style={{ width: '40%' }}>
                    <input
                        className="form-control pe-5"
                        type="text"
                        placeholder="Search by name, Price"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <BiSearchAlt2
                        size={20}
                        className="position-absolute"
                        style={{ top: '50%', right: '15px', transform: 'translateY(-50%)', color: '#888' }}
                    />
                </div>
                <select className="form-select w-25" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} >
                    <option value="all" >All</option>
                    <option value="Cat" >Cat</option>
                    <option value="Dog" >Dog</option>
                    <option value="Fish" >Fish</option>
                </select>
            </div>
            <div className="products-table mt-4 mb-5  bg-white shadow rounded w-100 ">
                <table className="table">
                    <thead className="table-light py-3">
                        <tr className="">
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">Description</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Rate</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterProducts?.map(product => (
                            <tr key={product.id} >
                                <td className="px-4 py-3 align-middle">{product.productName}</td>
                                <td className="px-4 py-3"><img src={product.imageURL} alt="product-image" style={{ width: '80px', height: '80px', objectFit: 'cover' }} /></td>
                                <td className="px-4 py-3 align-middle">{product.description.split(' ').length > 5
                                    ? product.description.split(' ').slice(0, 5).join(' ') + '...'
                                    : product.description}</td>
                                <td className="px-4 py-3 align-middle">{product.price}</td>
                                <td className="px-4 py-3 align-middle">{product.rate}</td>
                                <td className="px-4 py-3 align-middle">{product.category}</td>
                                <td className="px-4 py-3 align-middle ">
                                    <button type="button" className="btn border-0 p-0 me-1" data-bs-toggle="modal" data-bs-target={`#viewproduct-${product.id}`}>
                                        <FaEye />
                                    </button>
                                    <ViewProductModal product={product} modalId={product.id} />
                                    <button type="button" className="btn border-0 p-0" data-bs-toggle="modal" data-bs-target={`#editproduct-${product.id}`}>
                                        <TbEdit />
                                    </button>
                                    <EditProductModal product={product} modalId={product.id} setProducts={setProducts} onProductUpdate={(updatedProduct) => {
                                        const updatedList = products.map((p) =>
                                            p.id === updatedProduct.id ? updatedProduct : p
                                        );
                                        setProducts(updatedList);
                                    }} />
                                    <button type="button" className="btn border-0 p-0" >
                                        <MdDelete size={20} className='text-danger' onClick={() => setShowConfirm(true)} />
                                    </button>

                                </td>
                                {showConfirm && (<ConfirmModal onDelete={() => handleDeleteProduct(product.id)} setShowConfirm={setShowConfirm} selectedId={product.id} whatDelete="Product" />)}
                            </tr>
                        ))}

                    </tbody>
                </table>
                
            </div>

        </Fragment>
    )
}
