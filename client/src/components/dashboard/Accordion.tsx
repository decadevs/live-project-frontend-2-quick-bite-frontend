import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPopularFoods } from '../../slices/vendorPopularFoodsSlice';

export default function AccordionDash() {
    const dispatch = useAppDispatch();
    const { vendorPopularFoods, isLoading } = useAppSelector((state) => state.vendorPopularFood)

    console.log(isLoading)
    useEffect(() => {
        dispatch(getPopularFoods())
    }, [dispatch])

    const popularFoods = vendorPopularFoods?.filter((food) => food.order_count !== undefined && food.order_count > 10);

    return (
        <div>
            {popularFoods?.length > 0 ? (
                popularFoods.map((food, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography>{food.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {food.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            ) : (
                <Typography>No popular food with order count greater than 10 available.</Typography>
            )}
        </div>
    );
}
