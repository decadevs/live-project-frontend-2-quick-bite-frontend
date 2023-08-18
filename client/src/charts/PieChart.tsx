import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPopularFoods } from '../slices/vendorPopularFoodsSlice';

export default function PieChart() {
    const dispatch = useAppDispatch();
    const { vendorPopularFoods, isLoading } = useAppSelector(
        (state) => state.vendorPopularFood
    );

    useEffect(() => {
        dispatch(getPopularFoods());
    }, [dispatch]);

    const formatDataForChart = () => {
        return [
            ['Product', 'Popularity'],
            ...vendorPopularFoods.map((food) => [food.name, food.order_count]),
        ];
    };

    const options = {
        title: 'Popular Products',
        pieHole: 0.4,
        is3D: false,
        colors: ['#4285F4', '#0F9D58', '#F4B400', '#DB4437', '#9E69AF'],
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Pie Chart</h2>
            {vendorPopularFoods.length === 0 ? (
                <p>No data available.</p>
            ) : (
                <>
                    <h3>Popular Products</h3>
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="270px"
                        data={formatDataForChart()}
                        options={options}
                    />
                </>
            )}
        </div>
    );
}
