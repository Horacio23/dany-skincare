const formQuestions: Lang[] = [{
    ES: {
        text: "Esta es su primera visita?",
        headers: [],
    },
    ENG: {
        text: "Was this your first visit with us?",
        headers: [],
    }
},
{
    ES: {
        text: "¿Como calificaria la calidad de los servicios de cuidado de la piel o masajes que recibio?",
        headers: ["Mal", "Ok", "Genial"]
    },
    ENG: {
        text: "How would you rate the quality of the skin care or massage services you received?",
        headers: ["Bad", "Ok" ,"Great"]
    }
},
{
    ES: {
        text: "Que tan satisfecho estuvo con la limpieza y comodidad de nuestras instalaciones?",
        headers:["Desatisfecho", "Muy Satisfecho"]
    },
    ENG: {
        text: "How satisfied were you with the cleanliness and comfort of our facility?",
        headers: ["Disatisfied", "Satisfied"]
    }
},
{
    ES: {
        text: "Que tan probable es que recomiende nuestros servicios a otras personas?",
        headers: ["Poco probable","Muy probable"]
    },
    ENG: {
        text: "How likely are you to recommend our services to others?",
        headers: ["Not likely", "Very likely"]
    }
},
{
    ES: {
        text: "Que tan probable es que regrese para otro servicio?",
        headers: ["Nunca", "Ya reserve!"]
    },
    ENG: {
        text: "How likely are you to return for another service?",
        headers: ["Never", "Already booked!"]
    }
},
{
    ES: {
        text: "Comparta un comentario o sugerencia para ayudarnos a mejorar",
        headers: []
    },
    ENG: {
        text: "Share a comment or suggestion on how we can improve",
        headers: []
    }
},
]

export interface Lang {
    ES: { text: string; headers: string[]}
    ENG: { text: string; headers: string[]}
}

export {
    formQuestions,
}