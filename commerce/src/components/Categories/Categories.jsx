import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Pangan</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to="/products/2">Sandang</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/12715596/pexels-photo-12715596.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to="/products/3">Papan</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link className="link" to="/products/1">Lainnya</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link className="link" to="/products/1">Barang Baru</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/5947546/pexels-photo-5947546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Diskon</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories