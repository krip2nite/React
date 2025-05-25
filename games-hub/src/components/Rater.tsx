import { HStack } from '@chakra-ui/react';
import {FC, ReactNode, useMemo} from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
interface Props{
    starsNumber?: number;
    maxRate?: number;
    rate: number;
}

function getStars(stars: number, isFilled: boolean): ReactNode[] {
    return Array.from({length: stars},() => isFilled ? <FaStar key={getUniqueKey()}/> :
     <FaRegStar key={getUniqueKey()}/>)
}
function getUniqueKey(): number{
 return Math.random();
}

const Rater: FC<Props>= ({starsNumber= 5, maxRate=5, rate}) => {
    // return HStack of star icons
    // several filled stars, possible half filled star, empty starts
    // normalization of stars distribution 
    // normalized stars number => starNumber * rate / maxRate
    // number of filled stars => integer part of normalized value (example: normalized 2.5 -> 2 filled stars, 1 half filled star)
    // condition of half filled stars - (floor) if fractional part greater or equal 0.25 and less than 0.75
    // if fractional part less than 0.25 than number of filled stars will be only integer part
    // if fractional part greateer than 0.75 than number of filled stars will be integer part +1  
    
    const { filledStars, halfFilledStar, emptyStars } = useMemo(() => getStarsDistribution(), [starsNumber, maxRate, rate]);
    function getStarsDistribution(): {
        filledStars: number;
        halfFilledStar: boolean;
        emptyStars: number;
    } 
    {
        const normStarsNumber= (starsNumber * rate) / maxRate;
        let totalStars = starsNumber;
        let filledStars = Math.trunc(normStarsNumber);
        let halfFilledStar = false;
        const fractionalPart = normStarsNumber - filledStars;
        if (fractionalPart > 0.75) {
        filledStars++;
        } else if (fractionalPart > 0.25) {
        halfFilledStar = true;
        totalStars--;

        }
        const emptyStars = totalStars - filledStars ;
        return { filledStars, halfFilledStar, emptyStars };
    }
    return <HStack>
        {getStars(filledStars,true)}
        {halfFilledStar && <FaStarHalfAlt></FaStarHalfAlt>}
        {getStars(emptyStars, false)}
    </HStack>;
};


export default Rater;