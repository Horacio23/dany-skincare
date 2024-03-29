import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface RatingProps {
    header: string
    ratingHeaders?: string[]
    scale: number,
    onRatingSelect(rate: number): any

}
const Rating = ({
    header,
    ratingHeaders,
    scale,
    onRatingSelect
}: RatingProps) => {
    const [rating, setRating] = useState(0);
    const handleSelect = (rate: number) =>{
        setRating(rate)
        onRatingSelect(rate)
    }
    return ( 
        <div className="flex flex-col items-center py-2 px-8 ">
            <h2 className="uppercase bold-16 text-golden-100/90 whitespace-break-spaces text-center px-6">{header}</h2>
            <div className="flex flex-col min-w-[320px] py-2">
                {ratingHeaders && (
                    <div className="flex w-full justify-between">
                        {ratingHeaders.map((rHeader, index)=>(
                            <div key={index} className="flex flex-1 w-full items-center">
                                <p key={index} className="uppercase medium-8 w-full text-golden-300/80 text-center">{rHeader}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex justify-between border-t-[1px] border-t-golden-300  px-4 w-full py-2  ">
                    {[...Array(scale)].map((_,index)=>(
                        <Button 
                            key={index}
                            type="button"
                            variant="lf"
                            size="lf"
                            className={cn("bg-golden-100"
                                ,index==rating-1 && "bg-golden-400")}
                            onClick={()=> handleSelect(index+1)}
                        >
                            <p className={cn(
                                "bold-16 text-golden-900",
                                index==rating-1 && "text-slate-900"
                                )}>{index+1}</p>
                        </Button>
                    ))}
                </div>
            </div>
        </div> 
    );
}
 
export default Rating;