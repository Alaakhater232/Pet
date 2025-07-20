
import React, { Fragment, useState } from 'react';
import logo from '../../assets/petut.png';
import { toast } from 'react-toastify';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import axios from 'axios';
import { BeatLoader } from 'react-spinners';

export default function AddProductModal() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [rate, setRate] = useState('');
    const [category, setCategory] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);



    // add product to firebase
    const handleAddProduct = async () => {
        if (!productName || !description || !price || !rate || !category || !imageFile) {
            toast.error('Please fill in all the required fields', { autoClose: 3000 });
            return;
        }
        if (!imageFile) return;
        setLoading(true);

        const formData = new FormData();
        formData.append('image', imageFile);
        try {
            // upload image
            const response = await axios.post('https://api.imgbb.com/1/upload?key=da1538fed0bcb5a7c0c1273fc4209307', formData);



            const url = response.data.data.url;
            setImageUrl(url);
            console.log('Image URL:', url);



            // // add product to firebase
            await addDoc(collection(db, 'products'), {
                productName,
                description,
                price,
                rate,
                category,
                imageURL: url,
                createdAt: Timestamp.now()
            })
            toast.success('Product added successfully', { autoClose: 3000 });
            //reset fields
            setProductName('');
            setDescription('');
            setPrice('');
            setRate('');
            setCategory('');
            setImageFile(null);
            setTimeout(() => {
                document.getElementById('close-btn-modal').click();
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Failed to add product, error:" + error.message, { autoClose: 3000 });
        } finally {
            setLoading(false);
        }
    }
    return (
        <Fragment>
            <div className="modal fade" style={{ paddingTop: '70px' }} id="addproduct" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content px-2">
                        <div className="modal-header py-0 d-flex align-items-center justify-content-between">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Product Info</h1>
                            <img src={logo} width={'90px'} height={'90px'} alt="" />
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="product-name d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="product-name" className="form-label">Product Name</label>
                                    <input type="text" className="form-control w-75" id="product-name" placeholder="Enter Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                                </div>
                                <div className="product-description d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="product-description" className="form-label">Description</label>
                                    <textarea className="form-control w-75" id="product-description" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div className="product-rate d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="product-rate" className="form-label">Rating</label>
                                    <input type="number" min={0} max={5} step={0.5} className="form-control w-75" id="product-rate" placeholder="Enter Rate" value={rate} onChange={(e) => setRate(e.target.value)} />
                                </div>
                                <div className="product-price d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="product-price" className="form-label">Price</label>
                                    <input type="number" className="form-control w-75" id="product-price" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className="product-image d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="product-image" className="form-label">Image</label>
                                    <input type="file" className="form-control w-75" id="product-image" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
                                </div>
                                {imageUrl && (
                                    <div>
                                        <p>Image URL:</p>
                                        <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a>
                                        <br />
                                        <img src={imageUrl} alt="preview" style={{ width: 100, marginTop: 10 }} />
                                    </div>
                                )}
                                <div className="product-category">
                                    <label htmlFor="product-category" className="form-label">Category</label>
                                    <select className="form-select w-75" id="product-category" aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option value="" >Open this select menu</option>
                                        <option value="Cat">Cat</option>
                                        <option value="Dog">Dog</option>
                                        <option value="Fish">Fish</option>
                                        <option value="Bird">Bird</option>
                                        <option value="Horse">Horse</option>
                                        <option value="Reptile">Reptile</option>
                                    </select>
                                </div>




                            </form>
                        </div>
                        <div className="modal-footer d-flex gap-3">
                            <button type="button" className="btn btn-danger" id='close-btn-modal' data-bs-dismiss="modal" style={{ width: '100px' }}>Close</button>
                            <button type="button" className="custom-button" style={{ width: '120px' }} onClick={handleAddProduct} disabled={loading}>{loading ? <BeatLoader color='#fff' /> : 'Add Product'}</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
