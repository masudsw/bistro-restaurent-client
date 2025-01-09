import React, { useState } from 'react';
import shopImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../../component/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
    const [tabIndex, setTabIndex]=useState(0);
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert');
    const pizza=menu.filter(item=>item.category==='pizza');
    const salad=menu.filter(item=>item.category==='salad');
    const soup=menu.filter(item=>item.category==='soup');
    const offered=menu.filter(item=>item.category==='offered');

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

                <TabPanel></TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;