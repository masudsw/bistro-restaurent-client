import React, { useState } from 'react';
import shopImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../../component/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderItem from '../../../component/OrderItem';
import useMenu from '../../../hooks/useMenu';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drink = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover image={shopImg} title="Our Shop"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3  gap-10'>
                        {
                            salad.map(item => <OrderItem key={item._id} items={item}></OrderItem>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            pizza.map(item => <OrderItem key={item._id} items={item}></OrderItem>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            soup.map(item => <OrderItem key={item._id} items={item}></OrderItem>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            dessert.map(item => <OrderItem key={item._id} items={item}></OrderItem>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            drink.map(item => <OrderItem key={item._id} items={item}></OrderItem>)
                        }

                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;