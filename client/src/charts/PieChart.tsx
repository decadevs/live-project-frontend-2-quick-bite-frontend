import { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

export default function PieChart() {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetchPopularProducts();
    }, []);

    const fetchPopularProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3030/vendor/popular-products');
            const popularProductsData = response.data; // Assuming the API response is an array of popular products
            setPopularProducts(popularProductsData);
        } catch (error) {
            console.error(error);
        }
    };

    const formatDataForChart = () => {
        const chartData = [
            ['Product', 'Popularity'],
            ...popularProducts.map((product) => [product.name, product.popularity]),
        ];
        return chartData;
    };

    const options = {
        title: 'Popular Products',
        pieHole: 0.4,
        is3D: false,
        colors: ['#4285F4', '#0F9D58', '#F4B400', '#DB4437', '#9E69AF'],
    };

    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="270px"
            data={formatDataForChart()}
            options={options}
        />
    );
}
