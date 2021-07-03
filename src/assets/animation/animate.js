import { easeInOut } from "popmotion";

export   const pageVariant = {
    hidden:{
        x:'-100vw',
    },
    visible:{
        x:0,
        transition:{duration:0.5}
    },
    exit:{
        x:'-100vw',
        transition:{ease:easeInOut}
    }
}


export const overlayVariant = {
    hidden:{
        scale:0,
    },
    visible:{
        scale:1,
        transition:{duration:0.5}
    },
    exit:{
        scale:0,
        transition:{ease:easeInOut}
    }
}


export   const cardVariant = {
    hidden:{
        scale:0,
    },
    visible:{
        scale:1.1,
        transition:{delay:0.5,duration:0.5}
    },
    exit:{
        scale:0,
        transition:{ease:easeInOut}
    }
}






