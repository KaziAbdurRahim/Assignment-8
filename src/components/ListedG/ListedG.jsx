import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredGList } from '../../utilities/utility';
import Wishl from '../Wishl/Wishl.jsx';
import{getStoredwGList} from '../../utilities/utility2.js'
import CartList from '../CartList/CartList.jsx';
const ListedG = () => {

    const [cartLst, setCartList] = useState([]);
    const allG = useLoaderData();
    // console.log(allG,6);
    useEffect(() => {
        const storedG = getStoredGList();
        // console.log(storedG,allG);
        const cart = allG.filter(c => storedG.includes(c.product_id))
        setCartList(cart);
        // console.log(cartList.length,cart,2);

    }, [allG])

    const [wishList,setwishList]=useState([]);
    useEffect(()=>{
        const storedG = getStoredwGList();
        // console.log(storedG,allG);
        const wish = allG.filter(c => storedG.includes(c.product_id))
        setwishList(wish);

    },[allG])
    return (
        <div>

            <Tabs>
                <TabList>
                    <Tab >Cart</Tab>
                    <Tab >Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>cart {cartLst.length}</h2>
                    {
                        cartLst.map(gadget => (
                            <CartList key={gadget.product_id} gadget={gadget}></CartList>
                        ))
                    }

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                    {
                        wishList.map(gadget => (
                            <Wishl key={gadget.product_id} gadget={gadget}></Wishl>
                        ))
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedG;