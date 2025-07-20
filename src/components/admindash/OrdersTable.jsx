import React, { Fragment } from 'react'

export default function OrdersTable() {
    return (
        <Fragment>
            {/* <div className="orders-table mt-4 mb-5  bg-white shadow rounded w-100 ">
                <table className="table">
                    <thead className="table-light py-3">
                        <tr className="">
                            <th className="px-4 py-3">Customer Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Status</th>
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
                                    <EditProductModal product={product} modalId={product.id} onProductUpdate={(updatedProduct) => {
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

            </div> */}

        </Fragment>
    )
}
