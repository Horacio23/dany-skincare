"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "./ui/form"
import Rating from "./rating"
import { useState } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import toast from "react-hot-toast"
import { ThankYouModal } from "./modals/thankyou-modal"
import { useConfettiStore } from "@/hooks/use-confetti-store"
import axios from 'axios'
import { useParams, useRouter } from "next/navigation"
import { formQuestions, Lang } from "@/constants"
 
const formSchema = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    firstTime: z.boolean(),
    workoutRating: z.number(),
    cleanlinessRating: z.number(),
    recommendationRating: z.number(),
    returnRating: z.number(),
    coach: z.string(),
    coachRating: z.number(),
    feedback: z.string(),
    
})

const RatingForm = () => {
    const params = useParams<{location: string}>()
    const confetti = useConfettiStore()
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone:"",
            email:"",
            firstTime: false,
            workoutRating:0,
            cleanlinessRating:0,
            recommendationRating:0,
            returnRating:0,
            coach:"",
            coachRating:0,
            feedback:"",
        },
    })

    const [firstTime, setFirstTime] = useState(false);
    const [workoutRating, setWorkoutRating] = useState(0);
    const [cleanlinessRating, setCleanlinessRating] = useState(0);
    const [recommendationRating, setRecommendationRating] = useState(0);
    const [returnRating, setReturnRating] = useState(0);
    const [coachRating, setCoachRating] = useState(0);
    const [language, setLanguage] = useState("ES");

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log("submitting values")
        values.firstTime = firstTime
        values.workoutRating = workoutRating
        values.cleanlinessRating = cleanlinessRating
        values.recommendationRating = recommendationRating
        values.returnRating = returnRating
        values.coachRating = coachRating
        console.log(values)
        try {
            await axios.post(`/api/${params.location}/feedback/create`, values)
            toast.success("Feedback submitted")
        }catch(error){
            toast.error("Something went wrong")
            console.log(error)
        }
    }

    const thankYouConfirmation = () =>{
        console.log("redirecting")
        router.push("/linktree")
    }

    const getQuestionText = (questionNumber: number) => (language === "ES" ? formQuestions[questionNumber].ES : formQuestions[questionNumber].ENG).text
    const getQuestionHeader = (questionNumber: number) => (language === "ES" ? formQuestions[questionNumber].ES : formQuestions[questionNumber].ENG).headers

    return ( 
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="z-50 pb-8">
                <FormField 
                    control={form.control}
                    name="firstTime"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex flex-col w-full px-8 items-center pb-4">
                                <h1 className="bold-16 uppercase text-golden-100/90 text-center pb-2">{getQuestionText(0)}</h1>
                                <div className="flex justify-between px-12 py-1 min-w-[320px] border-golden-300 border-t-[1px] pt-2">
                                    <Button 
                                        variant="lf"
                                        type="button"
                                        onClick={()=>setFirstTime(true)}
                                        className={cn(
                                            "px-8 bold-16 text-golden-900",
                                            firstTime  && "bg-golden-400 text-sc-10"
                                        )}
                                    >
                                        {language == "ES" ? "Si" : "Yes"}
                                    </Button>
                                    <Button 
                                        variant="lf"
                                        type="button"
                                        onClick={()=>setFirstTime(false)}
                                        className={cn(
                                            "px-8 bold-16 text-golden-900",
                                            !firstTime && "bg-golden-400 text-slate-900"
                                        )}
                                    >No</Button>
                                </div>
                            </div>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="workoutRating"
                    render={({ field }) => (
                        <FormItem>
                            <Rating 
                            header={getQuestionText(1)}
                            ratingHeaders={getQuestionHeader(1)}
                            scale={5} 
                            onRatingSelect={(rate: number) => setWorkoutRating(rate)} />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="cleanlinessRating"
                    render={({ field }) => (
                        <FormItem>
                            <Rating 
                            header={getQuestionText(2)}
                            ratingHeaders={getQuestionHeader(2)}
                            scale={5} 
                            onRatingSelect={(rate: number) => setCleanlinessRating(rate)} />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="recommendationRating"
                    render={({ field }) => (
                        <FormItem>
                            <Rating 
                            header={getQuestionText(3)}
                            ratingHeaders={getQuestionHeader(3)}
                            scale={5} 
                            onRatingSelect={(rate: number) => setRecommendationRating(rate)} />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="returnRating"
                    render={({ field }) => (
                        <FormItem>
                            <Rating 
                            header={getQuestionText(4)}
                            ratingHeaders={getQuestionHeader(4)}
                            scale={5} 
                            onRatingSelect={(rate: number) => setReturnRating(rate)} />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex flex-col w-full px-8 items-center py-2">
                                    <h1 className="bold-16 uppercase text-center text-golden-100/90 pb-2">{getQuestionText(5)}</h1>
                                    <div className="flex justify-between py-1 min-w-[320px] ">
                                        <Textarea 
                                            placeholder="" 
                                            className="resize-none border-black-80 rounded-md"
                                            {...field} 
                                        />
                                    </div>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className=" mx-8 my-4 rounded-3xl gradient1 px-6 border-black-80 border-[1px]">
                    <FormField 
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <div className="pb-2 pt-4">
                                <FormItem>
                                    <FormLabel className="text-slate-950 bold-16">Your Name:</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="" className="text-gray-950" {...field} />
                                    </FormControl>
                                </FormItem>
                            </div>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <div className="pb-2">
                                <FormItem>
                                    <FormLabel className="text-slate-950 bold-16">Phone:</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="" {...field} />
                                    </FormControl>
                                </FormItem>
                            </div>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <div className="pb-4">
                                <FormItem>
                                    <FormLabel className="text-slate-950 bold-16">Email:</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="" {...field} />
                                    </FormControl>
                                </FormItem>
                            </div>
                        )}
                    />
                </div>
                <div className="flex w-full">
                    <ThankYouModal onConfirm={()=>thankYouConfirmation()}>
                        <Button 
                            type="submit"
                            className="capitalize w-full bg-[#fbdbab]  px-8 py-6 mx-8 bold-20 text-slate-950 hover:bg-tearose-100/90"
                        >{language==="ES" ? "Enviar" : "Submit feedback"}</Button>
                    </ThankYouModal>
                </div>
                
            </form>
        </Form>
        );
}
 
export default RatingForm;