import React from "react";
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home--container">
                <img className="home--image" src="https://m.media-amazon.com/images/I/61VAXLxegiL._SX3000_.jpg" alt="" />

                <div className="home--row">
                    <Product
                        id="01"
                        title="Kitchen Appliances - Cooker"
                        price={1200}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Store/2021/Jupiter/mock/DesktopGateway-cc-379x304_vernacs_T2.11._SY304_CB641246847_.jpg"

                    />
                    <Product
                        id="02"
                        title="HP 14(2021) 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD"
                        price={66999}
                        image="https://m.media-amazon.com/images/I/61HIqJZKPkS._SL1324_.jpg"

                    />
                    <Product
                        id="03"
                        title="Procus Hector Car Dash Camera, FHD 1080P"
                        price={3199}
                        image="https://m.media-amazon.com/images/I/51KLfLCiKnL._SL1000_.jpg"

                    />
                </div>

                <div className="home--row">
                    <Product
                        id="04"
                        title="Samsung Galaxy Watch4 Bluetooth"
                        price={26999}
                        image="https://m.media-amazon.com/images/I/61Nhi7ovjkL._SL1500_.jpg"

                    />
                    <Product
                        id="05"
                        title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
                        price={109999}
                        image="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"

                    />
                </div>

                <div className="home--row">
                    <Product
                        id="06"
                        title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO | L32M5-AL"
                        price={16999}
                        image="https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg"

                    />
                </div>

            </div>
        </div>
    );
}

export default Home;